var mongoose = require('mongoose');
const validator = require('validator')


var NewsSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    category:{
        type: String,
        required: true
    },
    name :{
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null,
    },
    description:{
        type: String,
        required: true
    }

}, {
    timestamps: true
})

var News = new mongoose.model('News', NewsSchema);

module.exports = News;