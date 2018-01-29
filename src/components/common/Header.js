import React from 'react'

const Header = ({ user }) => {

  return (
    <div className='header'>
      <div className='container d-flex justify-content-between py-4 align-items-end'>
        <div className='d-flex header-branding'>
          <img className='logo' src='/img/logo-red.svg' />
          <div className='d-flex flex-column justify-content-end mb-2'>
            <h1 className='text-white mb-0 pb-0'>TEST FLIGHT</h1>
            <small className='text-white ml-1 mt-0 pt-0'>accelerating your next innovation</small>
          </div>
        </div>
        <div className='d-flex'>
          <p className='text-white mb-0 pb-1 mr-3'>Hello, {user}</p>
          <a className='text-white log-out'>Log Out</a>
        </div>
      </div>
    </div>
  )
}

export { Header }
