import React from 'react'
import { MultiSelect } from './MultiSelect'

const LaunchPadItem = () => {
  return (
    <div className='d-flex align-items-center mb-5'>
      <p className='proto-name mr-4'>Digital employee management</p>
      <div className='multi-select mr-4'>
        <MultiSelect list={this.list} />
      </div>
      <p className='proto-feedback-link'>see feedback</p>
    </div>
  )
}

export { LaunchPadItem }
