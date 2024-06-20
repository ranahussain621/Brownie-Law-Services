var mongoose = require('mongoose');
const validator = require('validator')


var firmLawyer = new mongoose.Schema({
    firm_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    email:{
        type:String,
        required:[true, 'enter your email address'],
        validate:[validator.isEmail, 'please enter valid email']
    },

}, {
    timestamps: true
})

var firm_Lawyer = new mongoose.model('FirmLawyer', firmLawyer);

module.exports = firm_Lawyer;