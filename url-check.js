const https = require('https');
const http = require('http');

const httpsUrl = 'https://jsonplaceholder.typicode.com/';
const httpUrl = 'http://api.open-notify.org/iss-now.json';

// Check HTTPS URL
https.get(httpsUrl, (res) => {
  console.log('HTTPS status code:', res.statusCode);
  if (res.statusCode === 200) {
    console.log('HTTPS request passed');
  } else {
    console.log('HTTPS request failed');
  }
}).on('error', (err) => {
  console.log('HTTPS error:', err.message);
});

// Check HTTP URL
http.get(httpUrl, (res) => {
  console.log('HTTP status code:', res.statusCode);
  if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
    console.log('HTTP request passed');
  } else {
    console.log('HTTP request failed');
  }
}).on('error', (err) => {
  console.log('HTTP error:', err.message);
});
