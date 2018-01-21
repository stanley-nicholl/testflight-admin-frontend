import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, AddButton, LaunchPadItem } from './common'

class LaunchPad extends Component {

  render() {
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'launchpad'} />
        <div className='container'>
          <h2 className='page-title my-5'>LaunchPad</h2>
          <div className='d-flex mb-4'>
            <h5 className='subtitle mb-3'>Test Prototypes</h5>
            <h5 className='subtitle mb-3 ml-2'>Test Pilots</h5>
          </div>
          <LaunchPadItem />
          <LaunchPadItem />
          <LaunchPadItem />
        </div>


      <AddButton />
      </div>
    )
  }
}

export default LaunchPad
