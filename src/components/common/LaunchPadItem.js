import React from 'react'
import { MultiSelect } from './MultiSelect'
import { Link } from 'react-router-dom'

const LaunchPadItem = ({ id, name, key, alignment }) => {
  return (
    <div id={`launchpad-item-${id}`} className='d-flex align-items-center mb-5'>
      <p className='proto-name mr-4 pl-2 pt-2'>{name}</p>
      <div className='multi-select mr-4'>
        <MultiSelect alignment={alignment}/>
      </div>
      <Link to={`./prototype/review/${id}`} className='pt-2'>
        <p className='proto-feedback-link'>see prototype feedback</p>
      </Link>
    </div>
  )
}

export { LaunchPadItem }
