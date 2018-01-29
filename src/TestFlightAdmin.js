import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import TestPilots from './components/TestPilots'
import AddTestPilot from './components/AddTestPilot'
import Prototypes from './components/Prototypes'
import PrototypeReview from './components/PrototypeReview'
import AddPrototype from './components/AddPrototype'
import { Header, Navigation, Footer } from './components/common'

class TestFlightAdmin extends Component {
  state = {
    testPilots: [],
    prototypes: [],
    availablePilots: []
  }

  render() {
    return (
      <div>
        {/* <Header user={'Stan'} /> */}
        <Router>
          <div>
            <Route exact path='/' component={SignIn} />
            <Route path={`/prototype/review/:id`} component={PrototypeReview} />
            <Route exact path='/testpilots' component={TestPilots} />
            <Route exact path='/testpilots/add' component={AddTestPilot} />
            <Route exact path='/prototypes' component={Prototypes} />
            <Route exact path='/prototypes/add' component={AddPrototype} />
          </div>
        </Router>

      </div>
    )
  }
}

export default TestFlightAdmin
