import PropTypes from 'prop-types';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import React from 'react';
import STYLES from './Pricing.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Pricing = ({ price, agent, bookingUrl }) => (
  <div className={c('Pricing_container')}>
    <div className={c('Pricing_detail')}>
      <BpkText className={c('Pricing_price')} tagName="p" textStyle="lg" bold>{price}</BpkText>
      <BpkText className={c('Pricing_provider')} tagName="p" textStyle="sm">{agent}</BpkText>
    </div>
    <div className={c('Pricing_select')}>
      <BpkButton link={bookingUrl}>Select</BpkButton>
    </div>
  </div>
);

Pricing.propTypes = {
  price: PropTypes.string.isRequired,
  agent: PropTypes.string.isRequired,
  bookingUrl: PropTypes.string.isRequired,
};

export default Pricing;
