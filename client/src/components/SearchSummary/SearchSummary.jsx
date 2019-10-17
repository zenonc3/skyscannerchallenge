import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text/src/BpkText';
import React from 'react';
import STYLES from './SearchSummary.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const SearchSummary = ({
  origin, destination, numTravellers, cabinClass,
}) =>
  (
    <div className={c('SearchSummary__container')}>
      <div>
        <BpkText textStyle="xl">{origin}</BpkText>
        <BpkText textStyle="xl"> → </BpkText>
        <BpkText textStyle="xl">{destination}</BpkText>
      </div>
      <div>
        <BpkText textStyle="sm">{numTravellers} traveller(s), {cabinClass}</BpkText>
      </div>
    </div>
  );

SearchSummary.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  numTravellers: PropTypes.number.isRequired,
  cabinClass: PropTypes.string.isRequired,
};

export default SearchSummary;
