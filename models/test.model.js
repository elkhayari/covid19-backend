const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const testScema = new Schema({
    admin: {
        type: String,
        default: 'El khayari'
    },
    provinceState: {
        type: String,
        default: ''
    },
    countryRegion: {
        type: String,
        default: ''
    },
    active: {
        type: String,
        default: '0'
    },
    confirmed: {
        type: String,
        default: '0'
    },
    deaths:{
        type: String,
        default: '0'
    },
   
    dailyActive: {
        type: [String],
    },
    dailyDates: {
        type:  [String],

    },

},  {
    timestamps: true
});

const Test = mongoose.model('Test', testScema);
module.exports = Test;