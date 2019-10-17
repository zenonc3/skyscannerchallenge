import React from 'react';
import BpkButton from 'bpk-component-button/src/BpkButton';
import BpkSmallPriceAlertIcon from 'bpk-component-icon/sm/price-alerts';
import { withButtonAlignment } from 'bpk-component-icon';
import STYLES from './ActionBar.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const AlignedBpkSmallPriceAlertIcon = withButtonAlignment(BpkSmallPriceAlertIcon);

const ActionBar = () => (
  <div className={c('ActionBar__container')}>
    <BpkButton link className={c('ActionBar__filter')}>Filter</BpkButton>
    <BpkButton link className={c('ActionBar__sort')}>Sort</BpkButton>
    <div className={c('ActionBar__alert')}>
      <BpkButton link >
        <AlignedBpkSmallPriceAlertIcon /> Price Alerts
      </BpkButton>
    </div>

  </div>
);

export default ActionBar;
