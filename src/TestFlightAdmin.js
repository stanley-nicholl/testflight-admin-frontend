import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authenticateUser } from './actions'
import SignIn from './components/SignIn'
import TestPilots from './components/TestPilots'
import AddTestPilot from './components/AddTestPilot'
import Prototypes from './components/Prototypes'
import PrototypeReview from './components/PrototypeReview'
import AddPrototype from './components/AddPrototype'
import { Header, Navigation, Footer } from './components/common'


class TestFlightAdmin extends Component {

  componentDidMount = async () => {
    const token = await window.localStorage.getItem('testFlightToken')
    if(!token) {
      console.log('no token');
      return <Redirect to='/signin' />
    }else{
      const user = await this.props.authenticateUser(token)
      if(!user){
        console.log('no user');
      }
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/testpilots' component={TestPilots} />
            <Route exact path='/testpilots/add' component={AddTestPilot} />
            {/* <Route exact path='/prototypes' component={Prototypes} /> */}
            <Route exact path='/prototypes/add' component={AddPrototype} />
            <Route path={`/prototype/review/:id`} component={PrototypeReview} />
            <Route exact path={'/prototypes'} component={ (props) => <Prototypes { ...props } auth={this.props.auth.isAuthenticated} /> } />
          </div>
        </Router>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { authenticateUser })(TestFlightAdmin)
