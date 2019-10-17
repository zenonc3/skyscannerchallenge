import BpkTicket from 'bpk-component-ticket';
import React from 'react';
import Pricing from '../Pricing';
import Leg from '../Leg';
import STYLES from './Itinerary.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Itinerary = ({ outbound, inbound, pricing }) => {
  const pricingComponent = <Pricing {...pricing} />;
  return (
    <div className={c('Itinerary__container')}>
      <BpkTicket stub={pricingComponent} vertical>
        <Leg {...outbound} />
        <Leg {...inbound} />
      </BpkTicket>
    </div>
  );
};

Itinerary.propTypes = {
  outbound: Leg.propTypes.isRequired,
  inbound: Leg.propTypes.isRequired,
  pricing: Pricing.propTypes.isRequired,
};

export default Itinerary;
