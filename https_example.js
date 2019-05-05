//require https module
var https = require('https');

//create test path for https request.
var options = {
  host: 'www.example.org',
  path: '/'
};

//called by https when the request is made.
var callback = (res) => {
  console.log('Response: Handler callback!');
  console.log('Response: ', res);
}

//showing asynchronous behaviour:
console.log("I'm about to make the request");
https.request(options, callback).end();
console.log("I've made the request!");
