import React from 'react'

const AddButton = ({ tooltip }) => {
  return (
    <div className='add-button-position'>
      <span className='my-tooltip'>{tooltip}</span>
      <div className="btn-floating btn-lg add-button"><i className="fa fa-plus"></i></div>
    </div>
  )
}

export { AddButton }
