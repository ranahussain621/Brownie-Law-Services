var mongoose = require('mongoose');
const validator = require('validator')


var NewsSchema = new mongoose.Schema({
    laywer_type:{
        type:String,
        required:true
    },

}, {
    timestamps: true
})

var News = new mongoose.model('Lawyertype', NewsSchema);

module.exports = News;