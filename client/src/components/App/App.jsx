import BpkText from 'bpk-component-text/src/BpkText';
import { BpkExtraLargeSpinner } from 'bpk-component-spinner';
import React from 'react';
import STYLES from './App.scss';
import Header from './../Header';
import ItineraryView from '../ItineraryView';
import SearchSummary from '../SearchSummary';
import ActionBar from '../ActionBar/ActionBar';
import { getNextMonday, getNextDay } from './../../utils/utils';

const c = className => STYLES[className] || 'UNKNOWN';

class App extends React.Component {
  constructor() {
    super();
    this.query = {
      origin: 'LHR',
      destination: 'EDI',
      numTravellers: 2,
      outboundDate: getNextMonday(),
      inboundDate: getNextDay(getNextMonday()),
      cabinClass: 'Economy',
    };
    this.state = {
      itineraries: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = new URL('http://localhost:4000/api/search');
    url.searchParams.append('origin', this.query.origin);
    url.searchParams.append('destination', this.query.destination);
    url.searchParams.append('adults', this.query.numTravellers);
    url.searchParams.append('outboundDate', this.query.outboundDate);
    url.searchParams.append('inboundDate', this.query.outboundDate);
    url.searchParams.append('cabinClass', this.query.cabinClass);
    fetch(url)
      .then(response => response.json())
      .then((results) => {
        this.setState({
          itineraries: results.itineraries || [],
          isLoaded: true,
        });
      })
      .catch(console.error);
  }

  render() {
    const { itineraries, isLoaded } = this.state;
    return (
      <div className={c('App')}>
        <Header />
        <SearchSummary
          origin={this.query.origin}
          destination={this.query.destination}
          numTravellers={this.query.numTravellers}
          cabinClass={this.query.cabinClass}
        />
        <ActionBar />
        <main className={c('App__main')}>
          {isLoaded ? <ItineraryView itineraries={itineraries} />
                    : <div className={c('App__spinner')}><BpkExtraLargeSpinner /> <BpkText tagName="p">This could take a few seconds...</BpkText> </div> }
        </main>
      </div>
    );
  }
}

export default App;
