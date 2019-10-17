import PropTypes from 'prop-types';
import React from 'react';
import BpkText from 'bpk-component-text/src/BpkText';


const formatNumStops = (numStops) => {
  switch (numStops) {
    case 0:
      return 'Direct';
    case 1:
      return '1 stop';
    default:
      return `${numStops} stops`;
  }
};

const formatDuration = (durationMinutes) => {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  return `${hours}h ${minutes}`;
};

const LegMeta = ({ duration, numStops }) => (
  <React.Fragment>
    <BpkText tagName="p" textStyle="sm">{formatDuration(duration)}</BpkText>
    <BpkText tagName="p" textStyle="sm">{formatNumStops(numStops)}</BpkText>
  </React.Fragment>
);

LegMeta.propTypes = {
  duration: PropTypes.number.isRequired,
  numStops: PropTypes.number.isRequired,
};

export default LegMeta;
