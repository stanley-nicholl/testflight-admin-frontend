import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  state={
    name: ''
  }

  componentDidMount() {
    this.setState({ name: this.props.auth.name })
  }


  render() {
    return (
      <div className='header'>
        <div className='container d-flex justify-content-between py-4 align-items-end'>
          <div className='d-flex header-branding'>
            <img className='logo' src='/img/logo-red.svg' alt='rocket ship logo'/>
            <div className='d-flex flex-column justify-content-end mb-2'>
              <h1 className='text-white mb-0 pb-0'>TEST FLIGHT</h1>
              <small className='text-white ml-1 mt-0 pt-0'>mission control for your innovation launchpad</small>
            </div>
          </div>
          <div className='d-flex'>
            <p className='text-white mb-0 pb-1 mr-3'>Hello, {this.props.auth.name}</p>
            <a className='text-white log-out'>Log Out</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, null)(Header)
