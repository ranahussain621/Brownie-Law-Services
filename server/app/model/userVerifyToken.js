var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String,
        default: null,
        required: true
    },

});

var UserVarifyToken = new mongoose.model('uservarifytokens', schema);

module.exports = UserVarifyToken;