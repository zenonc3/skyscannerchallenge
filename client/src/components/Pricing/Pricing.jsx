import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import React from 'react';
import STYLES from './Pricing.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Pricing = () => (
  <div className={c('Pricing_container')}>
    <div className={c('Pricing_detail')}>
      <BpkText className={c('Pricing_price')} tagName="p" textStyle="lg" bold>$32</BpkText>
      <BpkText className={c('Pricing_provider')} tagName="p" textStyle="sm">booking.com</BpkText>
    </div>
    <div className={c('Pricing_select')}>
      <BpkButton>Select</BpkButton>
    </div>
  </div>
);

export default Pricing;
