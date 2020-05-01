const axios = require('axios')
const mongoose = require('mongoose')

const baseURL = 'https://covid19.mathdro.id/api/daily/'

const Country = require('../../models/countries.model')


mongoose.connect('mongodb+srv://elkhayari:printfR210891@covid19-wyluh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

console.log('fetching data from ', baseURL)
let dates = []
//fetch dates
axios.get(`${baseURL}`)
    .then((res) => {
        res.data.map((data) => {
            //console.log(data.reportDate)
            dates.push(data.reportDate)
        })

    })
    .catch(error => {
        console.log('Error', error)
    })

// DONE



function fetchDataByCoutry() {
    //const countries = "Morocco Germany India Iran Italy Spain United Arab Emirates France Austria Turkey Algeria"
    //const slot_dates = ['2020-03-29','2020-03-30','2020-03-31','2020-02-01','2020-02-02','2020-02-03','2020-02-04']
    const date = '2020-04-20'
    //dates.map((date) => {
    //console.log(date)
    axios.get(`${baseURL}/${date}`)
        .then((res) => {
            
            res.data.map( (data, i) => {
               
                if(data.countryRegion == 'Morocco'){
                    console.log(data.countryRegion)
                    // let prevDoc =   Country.findOne({countryRegion: data.countryRegion })
                    // console.log(prevDoc)
                    
                    
                        console.log('findOneAndUpdate')
                        let doc =  Country.findOneAndUpdate({ countryRegion: data.countryRegion },
                            {
                                lastUpdate: data.lastUpdate,
                                lat: data.lat,
                                long: data.long,

                                confirmed: data.confirmed,
                                deaths: data.deaths,
                                recovered: data.recovered,
                                active: data.active,

                                '$push': {
                                    dailyConfirmed: data.confirmed,
                                    dailyDeaths: data.deaths,
                                    dailyRecovered: data.recovered,
                                    dailyActive: data.active,

                                   // dailyIncreaseConfirmed: parseFloat(data.confirmed) - parseFloat(prevDoc.confirmed) ,
                                    //dailyIncreaseDeaths:  parseFloat(data.deaths) - parseFloat(prevDoc.deaths) ,
                                    //dailyIncreaseRecovered:  parseFloat(data.recovered) - parseFloat(prevDoc.recovered) ,
                                    //dailyIncreaseActive:  parseFloat(data.active) - parseFloat(prevDoc.active) ,
                                    dailyIncreaseConfirmed: parseFloat(data.confirmed)  ,
                                    dailyIncreaseDeaths:  parseFloat(data.deaths) ,
                                    dailyIncreaseRecovered:  parseFloat(data.recovered),
                                    dailyIncreaseActive:  parseFloat(data.active) ,

                                    dailyDates: date
                                }
                            },
                            {
                                new: true,
                                upsert: true
                            }

                        )
                    
                }

            })
        })
        .catch(error => {
            console.log('Error', error)
        })
      

       //})





}

module.exports = fetchDataByCoutry





/**
 * 
 * if (prevDoc == null) {
                        // add new
                        console.log('add new', i)
                        console.log(data.provinceState , ' , ', data.countryRegion)
                        Country.insertMany({
                            provinceState: data.provinceState, countryRegion: data.countryRegion,

                            lastUpdate: data.lastUpdate,
                            lat: data.lat,
                            long: data.long,

                            confirmed: String(data.confirmed),
                            deaths: data.deaths,
                            recovered: data.recovered,
                            active: data.active,


                            dailyConfirmed: data.confirmed,
                            dailyDeaths: data.deaths,
                            dailyRecovered: data.recovered,
                            dailyActive: data.active,

                            dailyIncreaseConfirmed: data.confirmed,
                            dailyIncreaseDeaths: data.deaths,
                            dailyIncreaseRecovered: data.recovered,
                            dailyIncreaseActive: data.active,

                            dailyDates: date

                        },
                            {
                                new: true,
                                upsert: true
                            }

                        )
                    }
 */