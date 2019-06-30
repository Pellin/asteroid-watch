const request = require('request');
const keys = require('../config/keys');

const fetchSentries = () => {
  const nasaKey = keys.nasaKey;
  const options = {
    url: `https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=1000&api_key=${nasaKey}`
  };

  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const reply = JSON.parse(body);
        resolve(reply);
      } else reject("No, sorry, that didn't work");
    });
  });
};

module.exports = fetchSentries;
