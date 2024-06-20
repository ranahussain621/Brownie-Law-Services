var mongoose = require('mongoose');
const validator = require('validator')


var serviceSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null,
    },

}, {
    timestamps: true
})

var Service = new mongoose.model('Service', serviceSchema);

module.exports = Service;