import React from 'react'

const DeleteButton = ({ id, deleteModal }) => {
  return (
    <div onClick={() => deleteModal(id)}>
      <a className="btn-floating btn-sm delete-button"><i className="fa fa-minus"></i></a>
    </div>
  )
}

export { DeleteButton }
