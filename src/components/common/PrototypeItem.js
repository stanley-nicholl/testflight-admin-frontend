import React from 'react'

const PrototypeItem = ({ id, name, description, userStory  }) => {
  return (
    <div>
      <div id={`prototype-${id}`} className='row mb-4 align-items-start'>
        <p className='title-data-point my-3 col-2'>{name}</p>
        <p className='data-point my-3 col-5'>{description}</p>
        <p className='data-point my-3 col-5'>{userStory}</p>
      </div>
    </div>
  )
}

export { PrototypeItem }
