var mongoose = require('mongoose');
const validator = require('validator')
const mongoosePaginate = require('mongoose-paginate-v2');


var profileSchema = new mongoose.Schema({
    firm_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default:null,
    },
    city:{
        type:String,
        default:null
    },
    country:{
        type:String,
        default:null
    },
    state: {
        type:String,
        default:null
    },
    totalAttorneyNum: {
        type:Number,
        default:0
    },
    majorPracticeArea: {
        type:String,
        default:null
    },
    presidingPartner:{
        type:String,
        default:null
    },
    majorOfficeLocation: {
        type: String,
        default: null,
    },
    noOfOffices:{
        type: Number,
        default:0
    },
    noteableAwards:{
        type:String,
        default:null
    },
    noteableCases:{
        type:String,
        default:null
    }, 
    aboutFirm:{
        type: String,
        default: null,
    },
    ourMission:{
        type:String,
        default:null
    },
}, {
    timestamps: true
})
//profileSchema.index({ location: "2dsphere" });
profileSchema.plugin(mongoosePaginate);

profileSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}
var profile = new mongoose.model('Profile', profileSchema);

module.exports = profile;