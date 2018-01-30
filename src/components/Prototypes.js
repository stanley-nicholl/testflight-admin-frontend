import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navigation, AddButton } from './common'
import Header from './common/Header'
import PrototypeItem from './common/PrototypeItem'
import { fetchPrototypes, deletePrototype } from '../actions'

class Prototypes extends Component {
  state = {
    deleteTarget: null
  }

  async componentDidMount() {
    this.props.fetchPrototypes()
  }

  deleteModal(id) {
    window.$('#prototpyeModal').modal('toggle')
    this.setState({ deleteTarget: id })
  }

  deletePrototype() {
    const id = this.state.deleteTarget
    this.props.deletePrototype(id)
    window.$('#prototpyeModal').modal('toggle')
  }

  cancelModal() {
    this.setState({ deleteTarget: null })
    window.$('#prototpyeModal').modal('toggle')
  }

  render() {
    if(!this.props.prototypes.length) return null
    return (
      <div>
        <Header />
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
            return <PrototypeItem key={index} id={id} name={name} description={description} userStory={userStory} deleteModal={(id) => this.deleteModal(id)} />
          })}
        </div>

        <div className="modal fade bottom" id="prototpyeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-frame modal-bottom" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Are you sure you sure you want to delete this prototype?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel-modal" data-dismiss="modal" onClick={() => this.cancelModal()}>cancel</button>
                <button type="button" className="btn btn-delete-modal"onClick={() => this.deletePrototype()}>Delete Prototype</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { prototypes: state.prototypes }
}

export default connect(mapStateToProps, { fetchPrototypes, deletePrototype })(Prototypes)
