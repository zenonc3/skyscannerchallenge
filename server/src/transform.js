/**
 * Indexes data using the "Id" parameter for easy access
 * @param {*} data to generate index for
 * @returns {*} indexed data in the form {key: originalDataObject}
 */
const generateIndex = (data) => {
  const index = {};
  data.forEach((element) => {
    index[element.Id] = element;
  });
  return index;
};

/**
 * Takes raw skyscanner api results and coverts them into a more suitable format
 * @param {*} results raw skyscanner api results
 * @returns {*} an itinerary suitable for consumption by a frontend that displays
 * itineraries composed of legs and prices.
 */
const transform = (results) => {
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
};

module.exports = {
  transform,
};
