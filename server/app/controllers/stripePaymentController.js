'use strict'
const Stripe = require('stripe');
const UserModel = require('../model/users')
var nodemailer = require("nodemailer");

const stripe = require('stripe')('sk_test_51OJv7nFQrUc7kcZamBgXnpvvzO3WQV3q8ivotP7m2sVyUCxqBFCBk9UoBHWEAQEBWPzd1xZr5cR0whY44R8h1n8W00OV11DOlv');




exports.subscribeCustomerAndBuyPlan = async (req, res) => {
  try {
    const { user_id, planId } = req.body;

    // Input Validation
    if (!user_id || !planId) {
      return res.status(400).json({ success: false, message: "Missing required parameters" });
    }

    // Check if the user exists
    const user = await UserModel.findById(user_id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if the user already has a plan
    if (user.plan_id !== null) {
      return res.status(400).json({ success: false, message: "User already bought a plan" });
    }

    // Retrieve or create a Stripe customer
    let customer = await stripe.customers.list({
      email: user.email,
      limit: 1,
    });

    if (customer.data.length === 0) {
      customer = await stripe.customers.create({
        email: user.email,
      });
    } else {
      customer = customer.data[0];
    }

    // Subscribe the customer to the plan without specifying a payment method
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: planId }],
      collection_method: 'send_invoice',
      days_until_due: 30,
    });

    // Update user information in the database
    const filter = { _id: user_id };
    const updateDoc = {
      $set: {
        stripe_user_id: customer.id,
        plan_id: planId,
        stripe_sub_id: subscription.id,
        plan_price: subscription.plan.amount,
      },
    };
    const options = { upsert: true };

    await UserModel.updateOne(filter, updateDoc, options);

    // Send a success response
    res.json({ success: true, customer, subscription });
  } catch (error) {
    console.error('Error creating subscription or customer:', error);

    // Log the error details

    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

exports.unsubscribeCustomer = async (req, res) => {
  try {
      const { user_id } = req.body;
      const cust_check = await UserModel.findById(user_id);

      if (!cust_check) {
          return res.status(404).json({ error: 'User not found' });
      }

      if (!cust_check.stripe_sub_id) {
          return res.status(400).json({ error: 'User has no active subscription' });
      }

      const canceledSubscription = await stripe.subscriptions.update(cust_check.stripe_sub_id, {
          cancel_at_period_end: true,
      });

      const filter = { _id: user_id };
      const updateDoc = { $set: { plan_id: null, stripe_sub_id: null } };
      const options = { upsert: true };

      await UserModel.updateOne(filter, updateDoc, options);

      res.json({ canceledSubscription });
  } catch (error) {
      console.error('Error canceling subscription:', error);
      res.status(500).send('Internal Server Error');
  }
};


// Get all plans
exports.getAllPlans = async (req, res) => {
  try {
      const plans = await stripe.prices.list();

      res.json({ plans: plans.data });
  } catch (error) {
      console.error('Error retrieving plans:', error);
      res.status(500).send('Internal Server Error');
  }
};


// Get all plans
exports.getUserSubscription = async (req, res) => {
  try {
      const { user_id } = req.body;
      const cust_check = await UserModel.findById(user_id );
    const subscriptions = await stripe.subscriptions.list({
      customer: cust_check.stripe_user_id,
    });

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error('Error getting subscriptions:', error);
    res.status(500).send('Internal Server Error');
  }
};


// Get all plans
exports.getAllSubscription = async (req, res) => {
  try {
    const subscriptions = await stripe.subscriptions.list();

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error('Error getting all subscriptions:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Get subscriptions for a specific plan API
exports.getPlanSubscription = async (req, res) => {
  try {
    const planId = req.body.planId;

    const subscriptions = await stripe.subscriptions.list({
      price: planId,
    });

    res.json({ subscriptions: subscriptions.data });
  } catch (error) {
    console.error('Error getting plan subscriptions:', error);
    res.status(500).send('Internal Server Error');
  }
};


exports.getPlanReSubscription = async (req, res) => {
  try {
      // Find the user by ID
      const cust_check = await UserModel.findById(req.body.user_id);

      // Check if the user exists
      if (!cust_check) {
          return res.status(404).json({ error: 'User not found' });
      }

      const customerId = cust_check.stripe_user_id;

      // Retrieve the customer's active subscriptions, sorted by creation date in descending order
      const subscriptions = await stripe.subscriptions.list({
          customer: customerId,
          status: 'active',
          limit: 1, // Limit the result to 1 subscription
          
      });

      // Check if there is an active subscription
      if (subscriptions.data.length === 0) {
          return res.status(404).json({ error: 'No active subscriptions found' });
      }

      const recentSubscription = subscriptions.data[0];

      // Reactivate the subscription if canceled
      if (recentSubscription.status === 'canceled') {
          try {
              // Reactivate the subscription immediately
              const updatedSubscription = await stripe.subscriptions.update(recentSubscription.id, {
                  items: [{
                      id: recentSubscription.items.data[0].id,
                      price: recentSubscription.items.data[0].price.id,
                  }],
                  billing_cycle_anchor: 'now',
              });

              console.log('Subscription reactivated successfully:', updatedSubscription.id);

           

              res.json({ success: true, recentSubscription: updatedSubscription });
          } catch (reactivationError) {
              console.error('Error reactivating subscription:', reactivationError);
              return res.status(500).json({ error: 'Error reactivating subscription' });
          }
      } else {
          // No need to reactivate, return the information about the existing subscription
          //    Update user information in the database
              const filter = { id: req.body.user_id };
              const updateDoc = {
                  $set: {
                      plan_id: recentSubscription.plan.id,
                      stripe_sub_id: recentSubscription.id,
                  },
              };
              const options = { upsert: true };
              // await UserModel.updateOne(filter, updateDoc, options);
          res.json({ success: true, recentSubscription });
      }
  } catch (error) {
      console.error('Error updating customer information:', error);
      res.status(500).send('Internal Server Error');
  }
};


exports.upgradePlan = async (req, res) => {
  try {
    const { user_id, newPlanId } = req.body;
    const cust_check = await UserModel.findById(user_id);

    // Check if the user exists
    if (!cust_check) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user has an active subscription
    if (!cust_check.stripe_sub_id) {
      return res.status(400).json({ error: 'User has no active subscription' });
    }

    // Retrieve the current subscription
    const currentSubscription = await stripe.subscriptions.retrieve(cust_check.stripe_sub_id);

    // Log the current subscription information for debugging
    console.log('Current Subscription:', currentSubscription);

    

    // Cancel the current subscription
    const canceledSubscription = await stripe.subscriptions.update(cust_check.stripe_sub_id, {
      cancel_at_period_end: true,
    });

    // Create a new subscription with the upgraded plan
    const newSubscription = await stripe.subscriptions.create({
      customer: cust_check.stripe_user_id,
      items: [{ price: newPlanId }],
      collection_method: 'send_invoice', // Adjust as needed
      days_until_due: 30, // Adjust as needed
    });

    // Update user information in the database, including plan_price
    const filter = { _id: user_id };
    const updateDoc = {
      $set: {
        plan_id: newPlanId,
        stripe_sub_id: newSubscription.id,
        plan_price: newSubscription.plan.amount, // Store plan_price
      },
    };
    const options = { upsert: true };
    await UserModel.updateOne(filter, updateDoc, options);

    res.json({ success: true, canceledSubscription, newSubscription });
  } catch (error) {
    console.error('Error upgrading plan:', error);
    res.status(500).send('Internal Server Error');
  }
};
