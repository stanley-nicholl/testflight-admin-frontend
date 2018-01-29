import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import { signIn } from '../actions/user.actions'

const SignIn = ({ setUserDataToState, history, ...props }) => {

  // const signInPrep = (e) => {
  //   e.preventDefault()
  //   const payload={
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   }
  //
  //   props.signIn(payload)
  // }
  //
  // if(props.user.id) {
  //   // return <Redirect to="/queue" />
  // }

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
        <form className="signin form-elegant" onSubmit={e => console.log(e)}>

          {/* <!--Form without header--> */}
          <div className="card">

            <div className="card-body mx-4">

              {/* <!--Header--> */}
              <div className="text-center">
                <h3 className="dark-grey-text mb-5 form-title"><strong>Sign In</strong></h3>
              </div>

              {/* <!--Body--> */}
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

              {/* <!--Footer--> */}
              <div className="modal-footer mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Not a member?
                  <Link to={'/signup'}>
                    <span className="ml-1 link"> Sign Up</span>
                  </Link>
                </p>
              </div>

          </div>
          {/* <!--/Form without header--> */}

      </form>
      <div className='d-flex flex-column justify-content-center'>
        <h1 className='site-title mb-0'>TEST FLIGHT</h1>
        <h2 className="headline">accelerating your next innovation</h2>
      </div>
      </div>

    </div>
  )
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({signIn}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignIn)
