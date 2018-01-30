import {
  SIGNIN_USER,
  FETCH_USER,
  LOGOUT_USER
} from './types'

export const signInUser = (payload) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3000/api/auth/signin`, {
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

    dispatch({
      type: SIGNIN_USER,
      payload: data
    })

  }
}

export const authenticateUser = (token) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3000/api/users/fromtoken`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if(res){
      const json = await res.json()
      const data = { name: json.User.first_name, isAuthenticated: true}
      console.log(data);
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

    window.localStorage.removeItem('askifyToken')

    dispatch({
      type: LOGOUT_USER
    })
  }
}
