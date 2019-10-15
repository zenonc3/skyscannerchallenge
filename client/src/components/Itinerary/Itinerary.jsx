import BpkTicket from 'bpk-component-ticket';
import React from 'react';
import Pricing from '../Pricing';
import Leg from '../Leg';

const Itinerary = (itinerary) => {
  const pricingComponent = <Pricing {...itinerary.pricing} />;
  return (
    <BpkTicket stub={pricingComponent} vertical>
      <Leg {...itinerary.outbound} />
      <Leg {...itinerary.inbound} />
    </BpkTicket>
  );
};

Itinerary.propTypes = {
  outbound: Leg.propTypes.isRequired,
  inbound: Leg.propTypes.isRequired,
  pricing: Leg.propTypes.isRequired,
};

export default Itinerary;
