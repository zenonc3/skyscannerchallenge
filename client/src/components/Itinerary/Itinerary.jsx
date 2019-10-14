import BpkTicket from 'bpk-component-ticket';
import React from 'react';
import Pricing from '../Pricing';
import Leg from '../Leg';

const Itinerary = () => {
  const pricing = <Pricing />;
  return (
    <BpkTicket stub={pricing} vertical>
      <Leg />
      <Leg />
    </BpkTicket>
  );
};

export default Itinerary;
