import {
  SET_ALIGNMENT
} from './types'

export const setAlignment = (alignment) => {
  return (dispatch) => {
    dispatch (
      {
        type: SET_ALIGNMENT,
        payload: alignment
      }
    )
  }
}


export const updateAlignment = (prototype, id) => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await data.json()
    const { first_name, last_name, position, email, image } = user
    const body = { first_name, last_name, position, email, image, prototype_id: prototype }
    await fetch(`http://localhost:3000/api/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(body)
    })
    dispatch(setAlignment())
  }
}
