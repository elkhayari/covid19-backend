

const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')
const port = process.env.PORT || 5000// my front ent running on 3000

app.use(cors()) 
app.use(express.json())

app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     next();
   });


mongoose.connect('mongodb+srv://elkhayari:printfR210891@covid19-wyluh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})


//setup redis

// fetch data from database
/*
app.get('/[countryname]', async (req, res) => {
     //const jobs = await getAsync('github') 
     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
     return res.send('app')
})

*/

const trackingData = require('./routes/trackingData')

app.use('/trackingdata', trackingData)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
