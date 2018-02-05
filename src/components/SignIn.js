import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInUser } from '../actions'

class SignIn extends Component {

  signInPrep = async (e) => {
    e.preventDefault()
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    await this.props.signInUser(payload)
  }

  render() {
    return (
      <div>
        <div className="signin-homepage-video-section">
          <div className="video-background hidden-sm hidden-xs">
            <video preload="true" autoPlay="true" loop="true" className="video" poster="/video/2015-01-02-lightbulb-poster.jpg">
              <source src="/video/2015-01-02-lightbulb.mp4" type="video/mp4" />
            </video>
            <div className="signin-overlay"></div>
          </div>
        </div>
        <div className="signin-container d-flex align-items-center justify-content-around">
          <form className="signin form-elegant" onSubmit={e => this.signInPrep(e)}>
            <div className="card">
              <div className="card-body mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5 form-title"><strong>Sign In</strong></h3>
                </div>
                <div className="md-form">
                  <input type="text" id="Form-email1" name='email' className="form-control" required/>
                  <label htmlFor="Form-email1">Your email</label>
                </div>
                <div className="md-form pb-1">
                  <input type="password" id="Form-pass1" name='password' className="form-control" required/>
                  <label htmlFor="Form-pass1">Your password</label>
                </div>
                <div className='d-flex justify-content-center mt-0 mb-4'>
                  <small id='signinError'></small>
                </div>
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-block btn-rounded z-depth-1a signin-btn">Sign in</button>
                </div>
              </div>
            </div>
          </form>
          <div className='d-flex flex-column justify-content-center'>
            <h1 className='site-title mb-0'>TEST FLIGHT</h1>
            <h2 className="headline">mission control for your innovation launchpad</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { signInUser })(SignIn)
