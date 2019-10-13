import BpkTicket from "bpk-component-ticket";
import React from "react";
import Pricing from "../Pricing";
import Leg from "../Leg";

export default class Itenary extends React.Component {
    render(){
        const pricing = <Pricing/>
        return (
            <BpkTicket stub={pricing} vertical={true}>
                <Leg/>
                <Leg/>
            </BpkTicket>
        );
    }
}