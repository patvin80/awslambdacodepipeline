var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    console.log("i am here");
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};