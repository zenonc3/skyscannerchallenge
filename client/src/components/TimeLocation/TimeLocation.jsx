import React from "react";
import BpkText from "bpk-component-text";
import STYLES from "./TimeLocation.scss";

const c = className => STYLES[className] || 'UNKNOWN';

export default class TimeLocation extends React.Component {
    render() {
        return (
            <div className={c("TimeLocation_container")}>
                <div>
                    <BpkText className={c("TimeLocation_time")}> 23:59 </BpkText>
                </div>
                <div>
                    <BpkText className={c("TimeLocation_location")} bold={true}> LOC </BpkText>
                </div>
            </div>
        );
    }
}