'use strict'

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
const cron = require('node-cron');
const stripe = require('stripe')('sk_test_51OJv7nFQrUc7kcZamBgXnpvvzO3WQV3q8ivotP7m2sVyUCxqBFCBk9UoBHWEAQEBWPzd1xZr5cR0whY44R8h1n8W00OV11DOlv');
const UserModel = require('./app/model/users');



require('dotenv').config()
const dbConfig = require('./app/DBconnection')
const PORT = process.env.PORT || 4000;
const corsOptions = { credentials: true, origin: process.env.frontendUrl};
const app = express()
app.use(express.json())
app.use(cors(corsOptions));

app.use(express.static('public'));
app.use('/images', express.static('images'));

//dd connection 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
// routers
const authRouter = require('./app/routes/authRoutes')
const accessRouter = require('./app/routes/accessRoutes')
const caseTypeRoutes = require('./app/routes/caseTypeRoutes')
const caseRoutes = require('./app/routes/caseRoutes')
const lawyerTypeRoutes = require('./app/routes/lawyerTypeRoutes')
const newsRoutes = require('./app/routes/newsRoutes')
const lawyerRoutes = require('./app/routes/lawyerRoutes')
const chatRoutes = require("./app/routes/chatRoutes");
const messageRoutes = require("./app/routes/messageRoutes");
const stripePaymentRoutes = require('./app/routes/stripePaymentRoutes')
const firmRoutes = require('./app/routes/firmRoutes')
const serviceRoute = require('./app/routes/serviceRoutes')
const queryRoute = require('./app/routes/queryRoutes')



app.use('/auth', authRouter)
app.use('/access', accessRouter)
app.use('/casetype', caseTypeRoutes)
app.use('/case', caseRoutes)
app.use('/lawyertype', lawyerTypeRoutes)
app.use('/news', newsRoutes)
app.use('/lawyer', lawyerRoutes)
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);
app.use('/api/stripe',stripePaymentRoutes)
app.use('/api/firm',firmRoutes)
app.use('/api/service',serviceRoute)
app.use('/query',queryRoute)




const server = app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})

const io = require("socket.io")(server, {
  cors: {
    origin: process.env.URL || "*",
  },
  pingTimeout: 60000,
});

io.on("connection", (socket) => {

  socket.on("setup", (user) => {
    socket.join(user?.user[0]?._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
  });

  socket.on("new message", (newMessageStatus) => {
    const chat = newMessageStatus?.chat;
    if (!chat?.users) {
      return console.log("chat.users not defined");
    }
    chat.users.forEach((user) => {
      if (user._id === newMessageStatus?.sender?._id) return;

      socket.in(user._id).emit("message received", newMessageStatus);

      // Corrected event name
    });
  });



  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`); // Add this line to log when a socket disconnects
  });
});


  // Cron job for retrieving recent subscriptions for each user
  cron.schedule('* * * * *', async () => {
    try {
        // Retrieve the list of users from your database
        const users = await UserModel.find();
  
        // Iterate through each user
        for (const user of users) {
            // Check if user has a valid stripe_user_id
            if (user.stripe_user_id) {
                // Retrieve the subscriptions for the user from Stripe
                const subscriptions = await stripe.subscriptions.list({
                    customer: user.stripe_user_id,
                });
  
                // Check if subscriptions is defined before accessing data property
                if (subscriptions && subscriptions.data) {
                   
                    
                    // Log whether the user has an active subscription
                    if (subscriptions.data[0].cancel_at==null) {
                        console.log(`User ID: ${user._id} has an active subscription`);
                        // Add your custom logic to handle users with active subscriptions here
                    } else {
                        console.log(`User ID: ${user._id} has no active subscription`);
                        // Set plan_id and stripe_sub_id to null in the database
                        await UserModel.updateOne({ _id: user._id }, { $set: { plan_id: null, stripe_sub_id: null } });
                    }
                } else {
                    console.log(`User ID: ${user._id} has no subscriptions`);
                }
            } else {
                console.log(`User ID: ${user._id} does not have a valid stripe_user_id`);
            }
        }
  
        console.log('Cron job executed successfully');
    } catch (error) {
        console.error('Error executing cron job:', error.message);
    }
  }, {
    scheduled: true,
    timezone: 'America/New_York', // Replace with your timezone (e.g., 'America/New_York')
  });
  