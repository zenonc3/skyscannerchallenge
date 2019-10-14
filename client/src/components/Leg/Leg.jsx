import BpkSmallAircraftIcon from 'bpk-component-icon/sm/aircraft';
import React from 'react';
import STYLES from './Leg.scss';
import TimeLocation from '../TimeLocation';
import LegMeta from '../LegMeta';

const c = className => STYLES[className] || 'UNKNOWN';

const Leg = () => (
  <div className={c('Leg_container')} >
    <span><img src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" className={c('Leg_logo')} alt="airline logo" /></span>
    <div className={c('Leg_origin')}><TimeLocation /></div>
    <div className={c('Leg_arrow')}><BpkSmallAircraftIcon /></div>
    <div className={c('Leg_destination')}><TimeLocation /></div>
    <div className={c('Leg_meta')}><LegMeta /></div>
  </div>
);

export default Leg;
