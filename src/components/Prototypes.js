import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Header, Navigation, MultiSelect, AddButton } from './common'
import PrototypeItem from './common/PrototypeItem'
import { fetchPrototypes } from '../actions'

class Prototypes extends Component {

  async componentDidMount() {

    this.props.fetchPrototypes()
  }

  render() {
    if(!this.props.prototypes.length) return null
    return (
      <div>
        <Navigation tab={'prototypes'}/>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='page-title my-5'>Prototypes</h2>
            <Link to='/prototypes/add'>
              <AddButton tooltip={'Add prototype'}/>
            </Link>
          </div>

          <div className='row mb-5 top-row pt-1'>
            <h5 className='subtitle name col-2'>Name</h5>
            <h5 className='subtitle col-4'>Description</h5>
            <h5 className='subtitle col-5'>UserStory</h5>
          </div>
          {this.props.prototypes.map((prototype, index) => {
            const { id, name, description, userStory } = prototype
            return <PrototypeItem key={index} id={id} name={name} description={description} userStory={userStory} />
          })}
        </div>


      </div>
    )
  }
}

const mapStateToProps = state => {
  return { prototypes: state.prototypes }
}

export default connect(mapStateToProps, { fetchPrototypes })(Prototypes)
