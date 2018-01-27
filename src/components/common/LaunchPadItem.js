import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MultiSelect from './MultiSelect'
import { Link } from 'react-router-dom'
import { setAlignment } from '../../actions'

class LaunchPadItem extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { id, testers } = this.props
    this.props.setAlignment({ [id]: testers })
  }

  render(){
    const { id, name } = this.props
    return (
      <div id={`launchpad-item-${id}`} className='d-flex align-items-center mb-5'>
        <p className='proto-name mr-4 pl-2 pt-2'>{name}</p>
        <div className='multi-select mr-4'>
          <MultiSelect id={id}/>
        </div>
        <Link to={`./prototype/review/${id}`} className='pt-2'>
          <p className='proto-feedback-link'>see prototype feedback</p>
        </Link>
      </div>
    )
  }
}

export default connect(null, { setAlignment })(LaunchPadItem)
