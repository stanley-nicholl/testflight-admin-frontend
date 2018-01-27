import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Header, Navigation, AddButton } from './common'
import TestPilot from './common/TestPilot'
import { fetchTestPilots } from '../actions'

class TestPilots extends Component {

  componentDidMount() {
    this.props.fetchTestPilots()
  }

  render() {
    if(!this.props.testPilots.length) return null
    return (
      <div>
        <Navigation tab={'testpilots'}/>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='page-title my-5'>Test Pilots</h2>
            <Link to='/testpilots/add'>
              <AddButton tooltip={'Add test pilot'}/>
            </Link>
          </div>
          <div className='row mb-4 top-row pt-1'>
            <p className='col-2'></p>
            <h5 className='subtitle ml-2 name col-3'>Name</h5>
            <h5 className='subtitle col-3'>Title</h5>
            <h5 className='subtitle col-3'>Email</h5>
          </div>
          {this.props.testPilots.map((pilot, index) => {
            const { id, first_name, last_name, position, email, image } = pilot
            return <TestPilot key={index} id={id} first_name={first_name} last_name={last_name} title={position} email={email} image={image} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { testPilots: state.testPilots }
}

export default connect(mapStateToProps, { fetchTestPilots })(TestPilots)
