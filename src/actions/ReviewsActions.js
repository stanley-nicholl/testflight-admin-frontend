import {
  FETCH_REVIEWS
} from './types'

//grabs all reviews for a particular prototype
export const fetchReviews = (id) => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    const data = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/prototypes/${id}/reviews`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const reviews = await data.json()
     dispatch(
      {
        type: FETCH_REVIEWS,
        payload: reviews.Reviews
      }
    )
  }
}
