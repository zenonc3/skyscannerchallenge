import React from "react";
import STYLES from './SearchSummary.scss';
import BpkText from "bpk-component-text/src/BpkText";

const c = className => STYLES[className] || 'UNKNOWN';

export default class SearchSummary extends React.Component {
  render() {
    return (
      <div className={c("SearchSummary_container")}>
        <div className={c("SearchSummary_text")}>
          <BpkText textStyle="xxl">LOC</BpkText>
          <BpkText textStyle="xxl"> → </BpkText>
          <BpkText textStyle="xxl">LOC</BpkText>
        </div>
        <div>
            <BpkText>2 travellers, economy </BpkText>
        </div>
      </div>
    );
  }
}