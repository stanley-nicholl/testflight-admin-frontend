import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, AddButton, TestPilot } from './common'
import { fetchTestPilots } from '../actions'

class TestPilots extends Component {

  async componentDidMount() {
    const data = await fetch(`http://localhost:3000/api/users`)
    const users = await data.json()
    const pilots = users.users.filter((user) => {
      return !user.admin
    })
    this.props.fetchTestPilots(pilots)
  }

  render() {
    console.log(this.props.testPilots);
    if(!this.props.testPilots.length) return null
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'testpilots'}/>
        <div className='container'>
          <h2 className='page-title my-5'>Test Pilots</h2>
          <div className='row mb-4'>
            <p className='col-2'></p>
            <h5 className='subtitle name col-3'>Name</h5>
            <h5 className='subtitle col-3'>Title</h5>
            <h5 className='subtitle col-3'>Email</h5>
          </div>
          {this.props.testPilots.map((pilot, index) => {
            const { id, first_name, last_name, position, email, image } = pilot
            return <TestPilot key='index' id={id} first_name={first_name} last_name={last_name} title={position} email={email} image={image} />
          })}
        </div>
        <AddButton />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { testPilots: state.testPilots }
}

export default connect(mapStateToProps, { fetchTestPilots })(TestPilots)
