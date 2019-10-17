import PropTypes from 'prop-types';
import React from 'react';
import Itinerary from './../Itinerary';


const ItineraryView = ({ itineraries }) => {
  const itineraryCards = [];
  itineraries.forEach((itinerary) => {
    itineraryCards.push(<Itinerary key={itinerary.pricing.bookingUrl} {...itinerary} />);
  });
  return itineraryCards.slice(0, 50);
};

ItineraryView.propTypes = {
  itineraries: PropTypes.arrayOf(Itinerary).isRequired,
};

export default ItineraryView;
