import React, { Component } from 'react'
import { DeleteButton } from './DeleteButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
          <p className='data-point my-3 col-4'>{description}</p>
          <p className='data-point my-3 col-5'>{userStory}</p>
          <div className='col-1 mt-2 d-flex justify-content-end'>
            <DeleteButton id={`prototype-${id}`} deleteFunction={(id) => this.deleteProto(id)}/>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(null, { deletePrototype })(PrototypeItem)
