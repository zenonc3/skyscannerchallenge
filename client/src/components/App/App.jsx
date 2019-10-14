import React from 'react';

import STYLES from './App.scss';
import Header from './../Header';
import Itenary from '../Itenary';
import SearchSummary from '../SearchSummary';

const c = className => STYLES[className] || 'UNKNOWN';

class App extends React.Component {
  componentDidMount() {
    const url = new URL('http://localhost:4000/api/search');
    url.searchParams.append('origin', 'lhr');
    url.searchParams.append('destination', 'edi');
    url.searchParams.append('adults', '2');
    url.searchParams.append('outboundDate', '2019-10-21');
    url.searchParams.append('inboundDate', '2019-10-23');
    url.searchParams.append('cabinClass', 'Economy');
    fetch(url)
      .then(response => response.json())
      .then((results) => {
        console.log('TODO: something with these results:');
        console.log(results);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className={c('App')}>
        <Header />
        <SearchSummary />
        <main className={c('App__main')}>
          <Itenary />
        </main>
      </div>
    );
  }
}

export default App;
