import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

  componentDidMount(){
    const launchpad = document.getElementById('tab-1')
    const testpilots = document.getElementById('tab-2')
    const prototypes = document.getElementById('tab-3')
    const underline = document.getElementById('nav-underline')
    if(this.props.tab === 'launchpad'){
      launchpad.style.fontWeight = 'bold'
      testpilots.style.fontWeight = 'normal'
      prototypes.style.fontWeight = 'normal'
      underline.style.left = 0
      underline.style.marginLeft = '1rem'
    }else if (this.props.tab === 'testpilots') {
      launchpad.style.fontWeight = 'normal'
      testpilots.style.fontWeight = 'bold'
      prototypes.style.fontWeight = 'normal'
      underline.style.left = '33%'
      underline.style.marginLeft = '.8rem'
    }else{
      launchpad.style.fontWeight = 'normal'
      testpilots.style.fontWeight = 'normal'
      prototypes.style.fontWeight = 'bold'
      underline.style.left = '66%'
      underline.style.marginLeft = '.5rem'
    }
  }

  render() {
    return (
      <div className='tab-section'>
        <div className="tab-wrap container">

          <input type="radio" name="tabs" id="tab1" />
          <div className="tab-label-content d-flex flex-column selected" id="tab-1">
            <Link to='/'>
              <label id='tab-launchpad' className='mt-3' htmlFor="tab1">LAUNCHPAD</label>
            </Link>
          </div>

          <input type="radio" name="tabs" id="tab2" />
          <div className="tab-label-content d-flex flex-column" id="tab-2">
            <Link to='/testpilots'>
              <label id='tab-testpilots' className='mt-3' htmlFor="tab2">TEST PILOTS</label>
            </Link>
          </div>

          <input type="radio" name="tabs" id="tab3" />
          <div className="tab-label-content d-flex flex-column" id="tab-3">
            <Link to='/prototypes'>
              <label id='tab-prototypes' className='mt-3' htmlFor="tab3">TEST PROTOTYPES</label>
            </Link>
          </div>

          <div id='nav-underline' className='nav-underline'></div>

        </div>
      </div>
    )
  }
}

export { Navigation }
