import React from 'react';

import STYLES from './App.scss';
import Header from './../Header';
import Itenary from '../Itenary';

const c = className => STYLES[className] || 'UNKNOWN';

class App extends React.Component {
  render(){
    return (
      <div className={c('App')}>
      <Header />
      <main className={c('App__main')}>
        <Itenary/>
      </main>
    </div>
    )
  }
}

export default App;
