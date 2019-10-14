import BpkText from 'bpk-component-text';
import React from 'react';
import STYLES from './TimeLocation.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const TimeLocation = () => (
  <div className={c('TimeLocation_container')}>
    <div>
      <BpkText className={c('TimeLocation_time')}> 23:59 </BpkText>
    </div>
    <div>
      <BpkText className={c('TimeLocation_location')} bold> LOC </BpkText>
    </div>
  </div>
);

export default TimeLocation;
