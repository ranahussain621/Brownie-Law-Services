var mongoose = require('mongoose');
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2');


var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please enter your name']
    },
    email:{
        type:String,
        required:[true, 'enter your email address'],
        validate:[validator.isEmail, 'please enter valid email']
    },
    address: {
        type: String,
    },
    ourMission:{
        type: String,
    },
    password: {
        type: String,
        default: null,
        required:[true,'please enter your password'],
    },
    status: {
        type: String,
        default: 1,
    },
    email_verified_at: {
        type: String,
        default: null,
    },
    phone:{
        type: Number,
        required:true
    },
    active:{
        type:Boolean,
        default:false
    },
    subId:{
        type:String,
        default:null
    }, 
     subPlan:{
        type: String,
        default: null,
    },
    
     subStatus:{
        type: String,
        default: false,
    },
    image: {
        type: String,
        default: null,
    },
    firm_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default:null,
       
    },

    plan_price: {
        type: String,
        default: null,
    },


    plan_id: {
        type: String,
        default: null,
    },

    stripe_user_id: {
        type: String,
        default: null,
    },

    stripe_sub_id: {
        type: String,
        default: null,
    },
}, {
    timestamps: true
})
//userSchema.index({ location: "2dsphere" });
userSchema.plugin(mongoosePaginate);

userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}
var user = new mongoose.model('User', userSchema);

module.exports = user;