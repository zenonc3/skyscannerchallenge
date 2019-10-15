import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';
import React from 'react';
import STYLES from './TimeLocation.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const TimeLocation = ({ time, location }) => (
  <div className={c('TimeLocation__container')}>
    <div>
      <BpkText className={c('TimeLocation__time')}> {time} </BpkText>
    </div>
    <div>
      <BpkText className={c('TimeLocation__location')} bold> {location} </BpkText>
    </div>
  </div>
);

TimeLocation.propTypes = {
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default TimeLocation;
