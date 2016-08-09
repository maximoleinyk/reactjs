import React from 'react';

export default class Application extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'User'
		};
	}

	componentWillMount() {
		console.log('Will mount');
	}

	componentDidMount() {
		console.log('Did mount');
	}

	componentWillUpdate() {
		console.log('Will update');
	}

	componentDidUpdate() {
		console.log('Did update');
	}

	componentWillReceiveProps() {
		console.log('will receive props');
	}

	render() {
		return (
			<div>
				<h1>Welcome, {this.state.name}!</h1>
				<p>Application version {this.props.version}</p>
			</div>
		);
	}
}
