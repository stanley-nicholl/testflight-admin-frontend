// action to align test pilot to specific prototype experience

export const updateAlignment = (prototype, id) => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    const data = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const user = await data.json()
    const { first_name, last_name, position, email, image } = user
    const body = { first_name, last_name, position, email, image, prototype_id: prototype }
    await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'PUT',
      body: JSON.stringify(body)
    })
  }
}
