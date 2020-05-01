const router = require('express').Router();
const trackingdata = require('../models/trackingData.model');
// add tracking data
router.route('/add').post((req, res) => {
    console.log(req.body.data)
    const id = req.body.id;
    const coordinates = req.body.data.coordinates;
    const timestamp = req.body.data.timestamp;
   
    console.log(id, coordinates, timestamp)

    const newTrackingData = new trackingdata({
        id,
        coordinates,
        timestamp
    });
   
    newTrackingData.save()
    .then(() => res.json('data added'))
    .catch(arr => res.status(400).json('Error: ' + arr))
})

module.exports = router 