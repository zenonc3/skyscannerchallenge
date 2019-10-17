/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');
const { transform } = require('./transform');

const app = express();
const livePricing = require('./live-pricing');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/search', async (req, res) => {
  try {
    const queryParams = req.query;
    const results = await livePricing.search({
      originPlace: queryParams.origin,
      destinationplace: queryParams.destination,
      outbounddate: queryParams.outboundDate,
      inbounddate: queryParams.inboundDate,
      cabinclass: queryParams.cabinClass,
      adults: 1,
      children: 0,
      infants: 0,
      grouppricing: 'on',
    });
    res.json(transform(results));
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
