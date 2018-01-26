import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, LaunchPadItem } from './common'
import { fetchPrototypes, fetchTestPilots, fetchReviews } from '../actions'

class LaunchPad extends Component {

  componentDidMount(){
    this.props.fetchTestPilots()
    this.props.fetchPrototypes()
  }

  getReviewsForPrototype(id) {
    this.props.fetchReviews(id)
  }

  render() {
    if(!this.props.testPilots.length || !this.props.prototypes.length) return null
    const { prototypes, testPilots } = this.props
    // console.log(prototypes, testPilots);

    const data = prototypes.map(prototype => {
      const testers = []
      testPilots.forEach(pilot => {
        if(pilot.prototype_id === prototype.id){
          const tester = {
            value: pilot.id,
            label: `${pilot.first_name} ${pilot.last_name}`
          }
          testers.push(tester)
        }
      })
      return{
        id: prototype.id,
        name: prototype.name,
        testers: testers
      }
    })
    return (
      <div>
        <Navigation tab={'launchpad'} />
        <div className='container'>
          <h2 className='page-title my-5'>LaunchPad</h2>
          <div className='d-flex mb-5 top-row pt-1'>
            <h5 className='subtitle pl-2'>Prototypes</h5>
            <h5 className='subtitle ml-4'>Test Pilots</h5>
          </div>
          {data.map((prototype, index) => {
            return <LaunchPadItem key={index} id={prototype.id} name={prototype.name} alignment={prototype.testers}  />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    testPilots: state.testPilots,
    prototypes: state.prototypes
   }
}

export default connect(mapStateToProps, { fetchTestPilots, fetchPrototypes, fetchReviews })(LaunchPad)
