import PropTypes from 'prop-types';
import React from 'react';
import Itinerary from './../Itinerary';


const ItineraryView = ({ itineraries }) => {
  console.log(itineraries.length);
  console.log('view');
  const itineraryCards = [];
  itineraries.forEach((itinerary) => {
    console.log(itinerary);
    itineraryCards.push(<Itinerary key={itinerary.pricing.bookingUrl} {...itinerary} />);
  });
  return itineraryCards.slice(0, 50);
};

ItineraryView.propTypes = {
  itineraries: PropTypes.arrayOf(Itinerary),
};

export default ItineraryView;
