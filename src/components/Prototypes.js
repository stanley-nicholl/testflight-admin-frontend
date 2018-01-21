import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Header, Navigation, MultiSelect, AddButton } from './common'

class Prototypes extends Component {

  render() {
    return (
      <div>
        <Header user={'Stan'} />
        <Navigation tab={'prototypes'}/>
        

      <AddButton />
      </div>
    )
  }
}

export default Prototypes
