import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  // enables toggling between two tabs
  componentDidMount(){
    const testpilots = document.getElementById('tab-1')
    const prototypes = document.getElementById('tab-2')
    const underline = document.getElementById('nav-underline')
    if (this.props.tab === 'testpilots') {
      testpilots.style.fontWeight = 'bold'
      prototypes.style.fontWeight = 'normal'
      underline.style.left = '0%'
      underline.style.marginLeft = '.8rem'
    }else{
      testpilots.style.fontWeight = 'normal'
      prototypes.style.fontWeight = 'bold'
      underline.style.left = '50%'
      underline.style.marginLeft = '.5rem'
    }
  }

  render() {
    return (
      <div className='tab-section'>

        <div className="tab-wrap container">

          <input type="radio" name="tabs" id="tab1" />
          
          <div className="tab-label-content d-flex flex-column" id="tab-1">
            <Link to='/testpilots'>
              <div id='tab-testpilots' className='mt-3 tab-label'>TEST PILOTS</div>
            </Link>
          </div>

          <input type="radio" name="tabs" id="tab2" />

          <div className="tab-label-content d-flex flex-column" id="tab-2">
            <Link to='/prototypes'>
              <div id='tab-prototypes' className='mt-3 tab-label'>PROTOTYPES</div>
            </Link>
          </div>

          <div id='nav-underline' className='nav-underline'></div>

        </div>
      </div>
    )
  }
}

export { Navigation }
