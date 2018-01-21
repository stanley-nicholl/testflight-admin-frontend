import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'react-thunk'
import TestFlightAdmin from './TestFlightAdmin'

// import reducers from './reducers'

// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(logger, thunk)
// )

class App extends Component {

  render() {
    return (
      <Provider>
        <TestFlightAdmin />
      </Provider>
    );
  }
}

export default App;
