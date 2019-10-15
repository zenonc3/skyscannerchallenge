import PropTypes from 'prop-types';
import BpkSmallAircraftIcon from 'bpk-component-icon/sm/aircraft';
import React from 'react';
import STYLES from './Leg.scss';
import TimeLocation from '../TimeLocation';
import LegMeta from '../LegMeta';

const c = className => STYLES[className] || 'UNKNOWN';

const Leg = ({
  origin, destination, departure, arrival, duration, numStops, carrier,
}) => (
  <div className={c('Leg___container')} >
    <span><img src={`https://logos.skyscnr.com/images/airlines/favicon/${carrier}.png`} className={c('Leg__logo')} alt="airline logo" /></span>
    <div className={c('Leg__origin')}><TimeLocation time={departure} location={origin} /></div>
    <div className={c('Leg__arrow')}><BpkSmallAircraftIcon /></div>
    <div className={c('Leg__destination')}><TimeLocation time={arrival} location={destination} /></div>
    <div className={c('Leg__meta')}><LegMeta numStops={numStops} duration={duration} /></div>
  </div>
);

Leg.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  numStops: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
};

export default Leg;
