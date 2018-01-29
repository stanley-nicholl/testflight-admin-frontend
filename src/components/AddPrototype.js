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
    document.getElementById('formError').textContent = ''
    const { name, description, userStory } = this.state
    if(!name || !description || !userStory){
      document.getElementById('formError').textContent = 'All fields required to create a new prototype'
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

  onChange(e, key) {
    this.setState({ ...this.state, [key]: e.target.value })
  }

  render() {
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'prototypes'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Add Prototype</h2>

          <form>

              <div className="md-form">
                <i className="fa fa-first-order prefix form-icon"></i>
                <input
                  type="text" id="prototype-name"
                  className="form-control"
                  onChange={(e) => this.onChange(e, 'name')}
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
                  onChange={(e) => this.onChange(e, 'description')}
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
                  onChange={(e) => this.onChange(e, 'userStory')}
                  value={this.state.userStory}>
                </textarea>
                <label htmlFor="form8">User Story</label>
              </div>

              <div id='formError' className='form-error'></div>

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
