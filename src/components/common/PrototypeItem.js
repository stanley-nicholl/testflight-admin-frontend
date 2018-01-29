import React, { Component } from 'react'
import { DeleteButton } from './DeleteButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { deletePrototype } from '../../actions'

class PrototypeItem extends Component {
  constructor(props){
    super(props)
  }

  deleteProto(id) {
    this.props.deletePrototype(id)
  }

  render() {
    const { id, name, description, userStory  } = this.props
    return (
      <div>
        <div id={`prototype-${id}`} className='row mb-4 align-items-start'>
          <p className='title-data-point my-3 col-2'>{name}</p>
          <p className='data-point my-3 col-3'>{description}</p>
          <p className='data-point my-3 col-4'>{userStory}</p>
          <Link to={`./prototype/review/${id}`} className='pt-3 col-2'>
            <p className='proto-feedback-link'>see prototype feedback</p>
          </Link>
          <div className='col-1 mt-2 d-flex justify-content-end'>
            <DeleteButton id={`prototype-${id}`} id={id} deleteModal={this.props.deleteModal}/>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null, { deletePrototype })(PrototypeItem)
