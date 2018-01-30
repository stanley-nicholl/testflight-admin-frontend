import {
  SIGNIN_USER,
  FETCH_USER,
  LOGOUT_USER
} from './types'

export const signInUser = (payload) => {
  return async (dispatch) => {
    const res = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const user = await res.json()
    window.localStorage.setItem('testFlightToken', user.Auth)
    const data = { name: user.name, isAuthenticated: true}
    // console.log(data);

    dispatch({
      type: SIGNIN_USER,
      payload: data
    })

  }
}

export const authenticateUser = (token) => {
  return async (dispatch) => {
    const res = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users/fromtoken`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if(res){
      const json = await res.json()
      const data = { name: json.User.first_name, isAuthenticated: true}
      dispatch({
        type: FETCH_USER,
        payload: data
      })
    }else{
      return null
    }

  }
}


export function logUserOut() {
  return async (dispatch) => {

    await window.localStorage.removeItem('testFlightToken')

    dispatch({
      type: LOGOUT_USER
    })
  }
}
