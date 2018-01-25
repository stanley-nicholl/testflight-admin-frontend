import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, AddButton, PrototypeItem } from './common'
import { fetchPrototypes } from '../actions'

class Prototypes extends Component {

  async componentDidMount() {
    const data = await fetch(`http://localhost:3000/api/prototypes`)
    const prototypes = await data.json()
    this.props.fetchPrototypes(prototypes.prototypes)
  }

  render() {
    console.log(this.props.prototypes);
    if(!this.props.prototypes.length) return null
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'prototypes'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Prototypes</h2>
          <div className='row mb-4'>
            <h5 className='subtitle name col-2'>Name</h5>
            <h5 className='subtitle col-5'>Description</h5>
            <h5 className='subtitle col-5'>UserStory</h5>
          </div>
          {this.props.prototypes.map((prototype, index) => {
            const { id, name, description, userStory } = prototype
            return <PrototypeItem key='index' id={id} name={name} description={description} userStory={userStory} />
          })}
        </div>

      <AddButton />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { prototypes: state.prototypes }
}

export default connect(mapStateToProps, { fetchPrototypes })(Prototypes)
