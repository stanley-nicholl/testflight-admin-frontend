import {
  FETCH_REVIEWS
} from './types'

export const fetchReviews = (id) => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/api/prototypes/${id}/reviews`)
    const reviews = await data.json()
     dispatch(
      {
        type: FETCH_REVIEWS,
        payload: reviews.Reviews
      }
    )
  }
}
