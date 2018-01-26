import {
  FETCH_PILOTS
} from './types'

export const fetchTestPilots = () => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/api/users`)
    const users = await data.json()
    const pilots = users.users.filter((user) => {
      return !user.admin
    })
    dispatch (
      {
        type: FETCH_PILOTS,
        payload: pilots
      }
    )
  }
}

export const deleteTestPilot = (id) => {
  return async (dispatch) => {
    const target = id.substring(10)
    await fetch(`http://localhost:3000/api/users/${target}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    dispatch (fetchTestPilots())
  }
}
