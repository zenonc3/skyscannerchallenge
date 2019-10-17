/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');

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

function generateIndex(data) {
  const index = {};
  data.forEach((element) => {
    index[element.Id] = element;
  });
  return index;
}

function transform(results) {
  const legIndex = generateIndex(results.Legs);
  const agentIndex = generateIndex(results.Agents);
  const carrierIndex = generateIndex(results.Carriers);
  const placeIndex = generateIndex(results.Places);
  const itineraries = [];

  results.Itineraries.forEach((itinerary) => {
    const outBoundLeg = legIndex[itinerary.OutboundLegId];
    const inboundLeg = legIndex[itinerary.InboundLegId];
    itineraries.push({
      outbound: {
        origin: placeIndex[outBoundLeg.OriginStation].Code,
        destination: placeIndex[outBoundLeg.DestinationStation].Code,
        departure: outBoundLeg.Departure,
        arrival: outBoundLeg.Arrival,
        duration: outBoundLeg.Duration,
        numStops: outBoundLeg.Stops.length,
        carrier: carrierIndex[outBoundLeg.Carriers[0]].Code,
      },
      inbound: {
        origin: placeIndex[inboundLeg.OriginStation].Code,
        destination: placeIndex[inboundLeg.DestinationStation].Code,
        departure: inboundLeg.Departure,
        arrival: inboundLeg.Arrival,
        duration: inboundLeg.Duration,
        numStops: inboundLeg.Stops.length,
        carrier: carrierIndex[inboundLeg.Carriers[0]].Code,
      },
      pricing: {
        price: itinerary.PricingOptions[0].Price,
        agent: agentIndex[itinerary.PricingOptions[0].Agents[0]].Name,
        bookingUrl: itinerary.PricingOptions[0].DeeplinkUrl,
      },
    });
  });
  return {
    query: {
      origin: placeIndex[results.Query.OriginPlace].Code,
      destination: placeIndex[results.Query.DestinationPlace].Code,
      adults: results.Query.Adults,
      children: results.Query.Children,
      infants: results.Query.Infants,
      cabinClass: results.Query.CabinClass,
    },
    itineraries,
  };
}
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
