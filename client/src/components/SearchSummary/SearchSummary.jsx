import BpkText from 'bpk-component-text/src/BpkText';
import React from 'react';
import STYLES from './SearchSummary.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const SearchSummary = () =>
  (
    <div className={c('SearchSummary__container')}>
      <div>
        <BpkText textStyle="xl">LOC</BpkText>
        <BpkText textStyle="xl"> → </BpkText>
        <BpkText textStyle="xl">LOC</BpkText>
      </div>
      <div>
        <BpkText textStyle="sm">2 travellers, economy </BpkText>
      </div>
    </div>
  );


export default SearchSummary;
