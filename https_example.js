//require https module
var https = require('https');

//create test path for https request.
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

//called by https when the request is made.
var callback = (res) => {
  console.log('Response: Handler callback!');
  //IncomingMessage res
  // console.log('Response: ', res);

  //read the data
  res.on('data', (chunk) => {
    console.log('[-- Chunk of length: ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

//showing asynchronous behaviour:
console.log("I'm about to make the request");
https.request(options, callback).end();
console.log("I've made the request!");
