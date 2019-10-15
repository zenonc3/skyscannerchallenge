import PropTypes from 'prop-types';
import React from 'react';
import BpkText from 'bpk-component-text/src/BpkText';

const LegMeta = ({ duration, numStops }) => (
  <React.Fragment>
    <BpkText tagName="p" textStyle="sm">{duration}</BpkText>
    <BpkText tagName="p" textStyle="sm">{numStops}</BpkText>
  </React.Fragment>
);

LegMeta.propTypes = {
  duration: PropTypes.string.isRequired,
  numStops: PropTypes.string.isRequired,
};

export default LegMeta;
