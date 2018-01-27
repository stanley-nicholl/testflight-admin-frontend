//react-select library (requires create-react-class and prop-types libraries as dependencies)
//https://jedwatson.github.io/react-select/
//brought in accompanying styles from react-select library
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select';
import { setAlignment, updateAlignment, fetchTestPilots, fetchPrototypes } from '../../actions'

class MultiSelect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [],
			options: []
		}
	}

	componentWillReceiveProps (nextProps) {

		const options = nextProps.testPilots.map(pilot => {
			const { first_name, last_name, id } = pilot
			return {
				label: `${first_name} ${last_name}`,
				value: id
			}
		})
		const value = nextProps.testPilots.filter(pilot => {
			return pilot.prototype_id == nextProps.id
		}).map((pilot) => ({ value: pilot.id, label: `${pilot.first_name} ${pilot.last_name}` }))

		this.setState({
			...this.state,
				value: value,
			options: options
		})
	}

	handleSelectChange2 = async (value) => {
		console.log(value);
		// const valueArray = value.split(',').map(element => parseInt(element))
		// if(valueArray.length > this.state.value.length){
		// 	let change
		// 	this.state.value.forEach(itemO => {
		// 		let toggle = false
		// 		valueArray.forEach(itemN => {
		// 			if(itemN == itemO.value) toggle = true
    //
		// 		})
		// 		if(toggle === false) change = itemO
		// 	})
		// 	await this.props.updateAlignment(this.props.id, change.value)
		// }
	}

	handleSelectChange = async (value) => {
		const valueArray = value.split(',').map(element => parseInt(element))
		if(valueArray.length > this.state.value.length){
			valueArray.map( async (item) => {
				await this.props.updateAlignment(this.props.id, item)
			})
		}else{
			if(!value.length){
				await this.props.updateAlignment(null, this.state.value[0].value)
			}else if(value.length === 1){
				let change = this.state.value.filter(item => {
					return value != item.value
				})
				await this.props.updateAlignment(null, change[0].value)
			}else{
				let change
				this.state.value.forEach(itemO => {
					let toggle = false
					valueArray.forEach(itemN => {
						if(itemN == itemO.value) toggle = true

					})
					if(toggle === false) change = itemO
				})
				await this.props.updateAlignment(null, change.value)
			}
		}
		// this.props.setAlignment()
		// this.props.fetchPrototypes()
		this.props.fetchTestPilots()
	}

	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked
		})
	}

	render () {
		const { disabled, stayOpen, value } = this.state;

		return (
			<div className="section">
				<Select
					id={`selectorId-${this.props.id}`}
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange2}
					options={this.state.options}
					placeholder="Select your test pilot(s)"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    alignment: state.alignment,
		testPilots: state.testPilots
   }
}

export default connect(mapStateToProps, { setAlignment, updateAlignment, fetchTestPilots, fetchPrototypes })(MultiSelect)
