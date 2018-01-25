import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import logger from 'redux-logger'
import thunk from 'react-thunk'
import TestFlightAdmin from './TestFlightAdmin'

const store = createStore(reducers)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <TestFlightAdmin />
      </Provider>
    );
  }
}

export default App

// ,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// applyMiddleware(logger, thunk)
// )
