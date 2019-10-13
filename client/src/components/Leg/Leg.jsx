import React from "react";
import STYLES from "./Leg.scss";
import TimeLocation from "../TimeLocation";
import BpkSmallAircraftIcon from 'bpk-component-icon/sm/aircraft';
import LegMeta from "../LegMeta";

const c = className => STYLES[className] || 'UNKNOWN';

export default class Leg extends React.Component {
  render() {
    return (
      <div className={c("Leg_container")} >
        <span><img src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" className={c("Leg_logo")}/></span>
        <div className={c("Leg_origin")}><TimeLocation /></div>
        <div className={c("Leg_arrow")}><BpkSmallAircraftIcon/></div>
        <div className={c("Leg_destination")}><TimeLocation /></div>
        <div className={c("Leg_meta")}><LegMeta/></div>
      </div>
    );
  }
}