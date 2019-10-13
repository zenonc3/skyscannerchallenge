import React from "react";
import STYLES from './Pricing.scss';
import BpkButton from "bpk-component-button";
import BpkText from "bpk-component-text";

const c = className => STYLES[className] || 'UNKNOWN';

export default class Pricing extends React.Component {
    render(){
        return (
            <div className={c("Pricing_container")}>
                <div className={c("Pricing_detail")}>
                    <BpkText className={c("Pricing_price")} tagName="text" textStyle="lg" bold="true">$32</BpkText>
                    <BpkText className={c("Pricing_provider")} tagName="text" textStyle="sm">booking.com</BpkText>
                </div>
                <div className={c("Pricing_select")}>
                    <BpkButton>Select</BpkButton>
                </div>
            </div>
        );
    }
}