import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { authenticateUser } from './actions'
import SignIn from './components/SignIn'
import TestPilots from './components/TestPilots'
import AddTestPilot from './components/AddTestPilot'
import Prototypes from './components/Prototypes'
import PrototypeReview from './components/PrototypeReview'
import AddPrototype from './components/AddPrototype'
import { Header, Navigation, Footer } from './components/common'


const isPrivate = ({ isAuthenticated }, Component) => {
  return (props) => isAuthenticated ? <Component {...props} /> : <Redirect to="/"/>
}

class TestFlightAdmin extends Component {

  componentDidMount = async () => {
    const token = await window.localStorage.getItem('testFlightToken')
    if(token) await this.props.authenticateUser(token)
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/' component={() => this.props.auth.isAuthenticated ?
              <Redirect to="/testpilots"/> : <SignIn auth={this.props.auth}/>} />
            <Route exact path='/testpilots' component={ isPrivate(this.props.auth, TestPilots) } />
            <Route exact path='/testpilots/add' component={ isPrivate(this.props.auth, AddTestPilot) } />
            <Route exact path='/prototypes' component={ isPrivate(this.props.auth, Prototypes) } />
            <Route exact path='/prototypes/add' component={ isPrivate(this.props.auth, AddPrototype) } />
            <Route path={`/prototype/review/:id`} component={ isPrivate(this.props.auth, PrototypeReview) } />
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
