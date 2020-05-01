const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TrackingdataSchema = new Schema({
    id: {
        type: String,
        required: true,
        default: 'test'
    },
    coordinates : '',
    
    timestamp : '',
},

    {
        timestamps: true
    });

const Trackingdata = mongoose.model('TrackingData', TrackingdataSchema);
module.exports = Trackingdata;