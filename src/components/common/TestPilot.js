import React, { Component } from 'react'
import { DeleteButton } from './DeleteButton'
import { connect } from 'react-redux'
import Select from './Select'
import { deleteTestPilot } from '../../actions'

class TestPilot extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false
    }
  }

  render(){
    const { id, first_name, last_name, title, email, image } = this.props

    return (
      <div className='test-pilot px-3 pt-5 pb-1 mb-3'>
        <div id={`user-${id}`} className='row mb-5 align-items-center'>

          <div className='col-1'>
            <div className='pilot-img' style={{backgroundImage: `url(${image})`}}></div>
          </div>

          <p className='title-data-point my-3 col-2'>{`${first_name} ${last_name}`}</p>
          <p className='data-point my-3 col-2'>{title}</p>
          <p className='data-point my-3 col-3'>{email}</p>

          <div className='data-point my-3 col-3'><Select id={id} /></div>

          <div className='col-1 mt-2 d-flex justify-content-end'>
            <DeleteButton id={`testpilot-${id}`} id={id} deleteModal={this.props.deleteModal}/>
          </div>
          
        </div>
      </div>
    )
  }
}

export default connect(null, { deleteTestPilot })(TestPilot)
