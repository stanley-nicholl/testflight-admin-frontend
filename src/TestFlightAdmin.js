import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LaunchPad from './components/LaunchPad'
import TestPilots from './components/TestPilots'
import Prototypes from './components/Prototypes'
import { Navigation, Footer } from './components/common'

class TestFlightAdmin extends Component {
  state = {
    testPilots: [],
    prototypes: [],
    availablePilots: []
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={LaunchPad} />
            <Route path='/testpilots' component={TestPilots} />
            <Route path='/prototypes' component={Prototypes} />
          </div>
        </Router>

      </div>
    )
  }
}

export default TestFlightAdmin
