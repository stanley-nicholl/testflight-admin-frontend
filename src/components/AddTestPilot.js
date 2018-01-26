import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { Header, Navigation } from './common'

class AddTestPilot extends Component {
  constructor(props){
    super(props)
    this.state={
      first_name: '',
      last_name: '',
      position: '',
      email: '',
      image: ''
    }
  }

  async handleAdd(e) {
    e.preventDefault()
    const { first_name, last_name, position, email, image } = this.state
    if(!first_name || !last_name || !position || !email || !image){
      //show error
      return null
    }

    const body = { first_name, last_name, position, email, image }
    await fetch(`http://localhost:3000/api/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(result => {
        this.props.history.push('/testpilots')
      })
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.history.push('/testpilots')
  }

  onFirstNameChange(e) {
    this.setState({ ...this.state, first_name: e.target.value })
  }
  onLastNameChange(e) {
    this.setState({ ...this.state, last_name: e.target.value })
  }

  onPositionChange(e) {
    this.setState({ ...this.state, position: e.target.value })
  }

  onEmailChange(e) {
    this.setState({ ...this.state, email: e.target.value })
  }

  onImageChange(e) {
    console.log(e.target.value);
    this.setState({ ...this.state, image: e.target.value })
  }

  render() {
    return (
      <div>
        <Navigation tab={'testpilots'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Add Test Pilot</h2>

          <form>

            <div className='d-flex justify-content-between'>
              <div className="md-form side-by-side-question">
                <i className="fa fa-user prefix form-icon"></i>
                <input
                  type="text" id="test-pilot-first-name"
                  className="form-control"
                  onChange={(e) => this.onFirstNameChange(e)}
                  value={this.state.first_name}/>
                <label htmlFor="form3">First Name</label>
              </div>

              <div className="md-form side-by-side-question">
                <i className="fa fa-user prefix form-icon"></i>
                <input
                  type="text" id="test-pilot-last-name"
                  className="form-control"
                  onChange={(e) => this.onLastNameChange(e)}
                  value={this.state.last_name}/>
                <label htmlFor="form3">Last Name</label>
              </div>
            </div>

            <div className='d-flex justify-content-between'>
              <div className="md-form side-by-side-question">
                <i className="fa fa-id-badge prefix form-icon"></i>
                <input
                  type="text" id="test-pilot-title"
                  className="form-control"
                  onChange={(e) => this.onPositionChange(e)}
                  value={this.state.position}/>
                <label htmlFor="form3">Title</label>
              </div>

              <div className="md-form side-by-side-question">
                <i className="fa fa-envelope prefix form-icon"></i>
                <input
                  type="text" id="test-pilot-email"
                  className="form-control"
                  onChange={(e) => this.onEmailChange(e)}
                  value={this.state.email}/>
                <label htmlFor="form3">Email</label>
              </div>
            </div>


              <div className="md-form">
                <i className="fa fa-file-image-o prefix form-icon"></i>
                <input
                  type="text" id="test-pilot-image"
                  className="form-control"
                  onChange={(e) => this.onImageChange(e)}
                  value={this.state.image}/>
                <label htmlFor="form8">Headshot</label>
              </div>

              <div className="text-right">
                <button type='button' className="btn form-cancel-btn" onClick={(e) => this.handleCancel(e)}>Cancel</button>
                <button type='button' className="btn form-confirm-btn" onClick={(e) => this.handleAdd(e)}>Submit</button>
              </div>

          </form>

        </div>
      </div>
    )
  }
}

export default AddTestPilot
