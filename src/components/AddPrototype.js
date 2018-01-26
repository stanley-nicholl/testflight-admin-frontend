import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { Header, Navigation } from './common'

class AddPrototype extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      description: '',
      userStory: ''
    }
  }

  async handleAdd(e) {
    e.preventDefault()
    const { name, description, userStory } = this.state
    if(!name || !description || !userStory){
      //show error
      return null
    }

    const body = { name, description, userStory }
    await fetch(`http://localhost:3000/api/prototypes`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(result => {
        this.props.history.push('/prototypes')
      })
  }

  handleCancel(e) {
    e.preventDefault()
    this.props.history.push('/prototypes')
  }

  onNameChange(e) {
    this.setState({ ...this.state, name: e.target.value })
  }

  onDescriptionChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  onUserStoryChange(e) {
    this.setState({ ...this.state, userStory: e.target.value })
  }

  render() {
    return (
      <div>
        <Navigation tab={'prototypes'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Add Prototype</h2>

          <form>

              <div className="md-form">
                <i className="fa fa-first-order prefix form-icon"></i>
                <input
                  type="text" id="prototype-name"
                  className="form-control"
                  onChange={(e) => this.onNameChange(e)}
                  value={this.state.name}/>
                <label htmlFor="form3">Name</label>
              </div>

              <div className="md-form">
                <i className="fa fa-pencil prefix form-icon"></i>
                <textarea
                  type="text"
                  id="prototype-description"
                  className="md-textarea"
                  maxLength='280'
                  onChange={(e) => this.onDescriptionChange(e)}
                  value={this.state.description}>
                </textarea>
                <label htmlFor="form8">Description</label>
              </div>

              <div className="md-form">
                <i className="fa fa-book prefix form-icon"></i>
                <textarea
                  type="text"
                  id="prototype-userStory"
                  className="md-textarea"
                  maxLength='280'
                  onChange={(e) => this.onUserStoryChange(e)}
                  value={this.state.userStory}>
                </textarea>
                <label htmlFor="form8">User Story</label>
              </div>

              <div className="text-right">
                <button type='button' className="btn form-cancel-btn" onClick={(e) => this.handleCancel(e)}>Cancel</button>
                <button type='button' className="btn form-confirm-btn" onClick={(e) => this.handleAdd(e)}>Sumbit</button>
              </div>

          </form>

        </div>
      </div>
    )
  }
}

export default AddPrototype
