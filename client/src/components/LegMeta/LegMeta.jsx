import React from "react";
import BpkText from "bpk-component-text/src/BpkText";

export default class LegMeta extends React.Component {
  render() {
   return (
      <React.Fragment>
        <BpkText tagName="text" textStyle="sm">1h 30</BpkText>
        <BpkText tagName="text" textStyle="sm">Direct</BpkText>
      </React.Fragment>
    )
  }
}