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
			removeSelected: false,
			disabled: false,
			stayOpen: false,
			value: null,
			options: []
		}
	}

	async componentWillMount () {
		await this.props.fetchPrototypes()
		await this.props.fetchTestPilots()
		const options = this.props.prototypes.map(prototype => {
			return {value: prototype.id,label: prototype.name }
		})
		options.push({ value: 0, label: 'No prototype assigned'})
		const pilot = this.props.testPilots.filter(item => {
			return item.id === this.props.id
		})
		this.setState({ ...this.state, value: pilot[0].prototype_id, options })
	}

	handleSelectChange = async (value) => {
		this.setState({ ...this.state, value: value })
		await this.props.updateAlignment(value, this.props.id)
	}

	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked
		})
	}

	render () {
		const { disabled, stayOpen, value, options } = this.state;

		return (
			<div className="section">
				<Select
					id={`selectorId-${this.props.id}`}
					closeOnSelect={!stayOpen}
					disabled={disabled}
					onChange={this.handleSelectChange}
					options={this.state.options}
					placeholder="Select a prototype"
          removeSelected={this.state.removeSelected}
					simpleValue
					value={value}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
		testPilots: state.testPilots,
		prototypes: state.prototypes
   }
}

export default connect(mapStateToProps, { fetchTestPilots, fetchPrototypes, updateAlignment })(MultiSelect)
