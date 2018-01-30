import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { fetchReviews } from '../actions'
import { Navigation, AddButton, ReviewItem } from './common'
import Header from './common/Header'

class PrototypeReview extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const id = window.location.pathname.split('/')[3]
    this.props.fetchReviews(id)
  }

  handleBack(e){
    e.preventDefault()
    this.props.history.push('/prototypes')
  }

  render() {
    if(!this.props.reviews.length) {
      return (
      <div>
        <Header />
        <Navigation tab={'launchpad'}/>
        <div className='container'>
          <div>
            <h2 className='page-title my-5'>Prototype Reviews</h2>
          </div>
          <p>No reviews yet</p>
          <div className='d-flex justify-content-end'>
            <button type='button' className="btn form-confirm-btn mr-0" onClick={(e) => this.handleBack(e)}>Back to LaunchPad</button>
          </div>
        </div>
      </div>
      )
    }
    const { reviews } = this.props
    return (
      <div>
        <Navigation tab={'launchpad'}/>
        <div className='container'>
          <div>
            <h2 className='page-title my-5'>Prototype Reviews</h2>
          </div>
          <div className='d-flex justify-content-between mb-4'>
            <h3 className='experience-title'>{reviews[0].name}</h3>
            <p className='experience-content-section'>{reviews[0].description}</p>
          </div>
          <div className='d-flex justify-content-between review-section mb-4'>
            {reviews.map((review, index) => {
              return <ReviewItem key={index} review={review} />
            })}
          </div>
          <div className='d-flex justify-content-end'>
            <button type='button' className="btn form-confirm-btn mr-0" onClick={(e) => this.handleBack(e)}>Back to LaunchPad</button>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, { fetchReviews })(PrototypeReview)
