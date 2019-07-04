import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Advertisements from './components/AdvertisementsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Advertisements} />
        </div>
      </Provider>
    );
  }
}

export default App;
