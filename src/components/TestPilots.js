import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './common/Header'
import { Navigation, AddButton } from './common'
import TestPilot from './common/TestPilot'
import { fetchTestPilots, deleteTestPilot } from '../actions'

class TestPilots extends Component {
  state = {
    deleteTarget: null
  }

  componentDidMount() {
    this.props.fetchTestPilots()
  }

  deleteModal(id) {
    window.$('#TestPilotModal').modal('toggle')
    this.setState({ deleteTarget: id })
  }

  deletePilot() {
    const id = this.state.deleteTarget
    this.props.deleteTestPilot(id)
    window.$('#TestPilotModal').modal('toggle')
  }

  cancelModal() {
    this.setState({ deleteTarget: null })
    window.$('#TestPilotModal').modal('toggle')
  }

  render() {
    if(!this.props.testPilots.length) return null
    return (
      <div>
        <Header />
        <Navigation tab={'testpilots'}/>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='page-title my-5'>Test Pilots</h2>
            <Link to='/testpilots/add'>
              <AddButton tooltip={'Add test pilot'}/>
            </Link>
          </div>
          <div className='row mb-4 top-row pt-1'>
            <p className='col-1'></p>
            <h5 className='subtitle ml-1 name col-2'>Name</h5>
            <h5 className='subtitle col-2'>Title</h5>
            <h5 className='subtitle col-3'>Email</h5>
            <h5 className='subtitle col-3'>Assigned Prototype</h5>
          </div>
          {this.props.testPilots.sort((a,b) => {
            return a.id - b.id
          }).map((pilot, index) => {
            const { id, first_name, last_name, position, email, image, prototype_id } = pilot
            return <TestPilot key={index} id={id} first_name={first_name} last_name={last_name} title={position} email={email} image={image} prototype={prototype_id} deleteModal={(id) => this.deleteModal(id)}/>
          })}
        </div>

        <div className="modal fade bottom" id="TestPilotModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-frame modal-bottom" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Are you sure you sure you want to delete this test pilot?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel-modal" data-dismiss="modal" onClick={() => this.cancelModal()}>cancel</button>
                <button type="button" className="btn btn-delete-modal"onClick={() => this.deletePilot()}>Delete Pilot</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { testPilots: state.testPilots }
}

export default connect(mapStateToProps, { fetchTestPilots, deleteTestPilot })(TestPilots)
