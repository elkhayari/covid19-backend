const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
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
        
    },
    lastUpdate: {
        type: String,
        
    },
    lat: {
        type: String,
        default: ''
    },
    long: {
        type: String,
        default: ''
    },
    confirmed: {
        type: String,
        default: '0'
    },
    deaths: {
        type: String,
        default: '0'
    },
    recovered: {
        type: String,
        default: '0'
    },
    active: {
        type: String,
        default: '0'
    },
   
    dailyConfirmed: {
        type:  [String],
        default: '0'
    },
    dailyDeaths: {
        type:  [String],
        default: '0'
    },
    dailyRecovered: {
        type: [String],
        default: '0'
    },
    dailyActive: {
        type: [String],
        default: '0'
    },
    dailyIncreaseConfirmed: {
        type:  [String],
        default: '0'
    },
    dailyIncreaseDeaths: {
        type:  [String],
        default: '0'
    },
    dailyIncreaseRecovered: {
        type: [String],
        default: '0'
    },
    dailyIncreaseActive: {
        type: [String],
        default: '0'
    },
    dailyDates: {
        type:  [String],

        
    },

},  {
    timestamps: true
});

const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;