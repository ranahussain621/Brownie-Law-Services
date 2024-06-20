var mongoose = require('mongoose');
const validator = require('validator')


var caseSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    file: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

var Case = new mongoose.model('Case', caseSchema);

module.exports = Case;