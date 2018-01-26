import React from 'react'

const DeleteButton = ({ id, deleteFunction }) => {
  return (
    <div onClick={() => deleteFunction(id)}>
      <a className="btn-floating btn-sm delete-button"><i className="fa fa-minus"></i></a>
    </div>
  )
}

export { DeleteButton }
