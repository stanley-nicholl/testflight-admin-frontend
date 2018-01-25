import React from 'react'

const TestPilot = ({ id, first_name, last_name, title, email, image }) => {
  return (
    <div>
      <div id={`user-${id}`} className='row mb-4 align-items-center'>
        <div className=' col-2'>
          <div className='pilot-img' style={{backgroundImage: `url(${image})`}}></div>
        </div>
        <p className='title-data-point my-3 col-3'>{`${first_name} ${last_name}`}</p>
        <p className='data-point my-3 col-3'>{title}</p>
        <p className='data-point my-3 col-3'>{email}</p>
      </div>
    </div>
  )
}

export { TestPilot }
