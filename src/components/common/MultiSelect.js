//react-select library (requires create-react-class and prop-types libraries as dependencies)
//https://jedwatson.github.io/react-select/
//brought in accompanying styles from react-select library
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const FLAVOURS = [
	{ label: 'Marc Rogers', value: 1 },
	{ label: 'Jill Gallow', value: 2 },
	{ label: 'Marty Nakumura', value: 3 },
];

const MAX_CONTRIBUTORS = 2;
const ASYNC_DELAY = 500;

var MultiSelect = createClass({
	displayName: 'MultiSelect',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [],
			rtl: false,
		};
	},
	handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	},
	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	},
	toggleRtl (e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	},

	render () {
		const { disabled, stayOpen, value } = this.state;
		const options = FLAVOURS;
		return (
			<div className="section">
				<Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange}
					options={options}
					placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
					rtl={this.state.rtl}
					simpleValue
					value={value}
				/>
			</div>
		);
	}
});

export { MultiSelect }
