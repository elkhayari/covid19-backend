var CronJob = require('cron').CronJob;
const fetchDataByCoutry = require('./tasks/fetch-data-by-country')

// fetch data by coutry each day (last update)

//var job = new CronJob('*/1 * * * *', function() {
//    console.log('You will see this message every second');
 // }, fetchDataByCoutry, null, true, 'America/Los_Angeles');

  var job = new CronJob('* */1 * * * *', fetchDataByCoutry, null, true, 'America/Los_Angeles');

  job.start();