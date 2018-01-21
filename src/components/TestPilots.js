import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, AddButton, TestPilot } from './common'

class TestPilots extends Component {

  render() {
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'testpilots'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Test Pilots</h2>
          <div className='row mb-4'>
            <p className='col-2'></p>
            <h5 className='subtitle name col-3'>Name</h5>
            <h5 className='subtitle col-3'>Title</h5>
            <h5 className='subtitle col-3'>Email</h5>
          </div>
          <TestPilot />
          <TestPilot />
          <TestPilot />
          <TestPilot />
          <TestPilot />
          <TestPilot />
        </div>
        <AddButton />
      </div>
    )
  }
}

export default TestPilots
