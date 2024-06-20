var mongoose = require('mongoose');
const validator = require('validator')


var caseTypeSchema = new mongoose.Schema({
    case_type:{
        type:String,
        required:true
    },

}, {
    timestamps: true
})

var caseType = new mongoose.model('CaseType', caseTypeSchema);

module.exports = caseType;