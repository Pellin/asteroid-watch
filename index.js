const express = require('express');
const bodyParser = require('body-parser');

const fetchSentries = require('./utils/fetchSentries');
const parseSentries = require('./utils/parseSentries');
const fetchCurrent = require('./utils/fetchCurrent');
const parseCurrent = require('./utils/parseCurrent');
const fetchAsteroid = require('./utils/fetchAsteroid');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/sentries', async (req, res) => {
  const asteroids = await fetchSentries();
  const reply = parseSentries(asteroids.sentry_objects);
  res.send(reply);
});

app.get('/api/current', async (req, res) => {
  const asteroids = await fetchCurrent();
  const reply = parseCurrent(asteroids.near_earth_objects);
  res.send(reply);
});

app.get('/api/asteroid', async (req, res) => {
  const id = req.query.id;
  const asteroid = await fetchAsteroid(id);
  res.send(asteroid);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
