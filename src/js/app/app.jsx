import {Component} from 'react';

export default class Application extends Component {
	constructor() {
		super();
		this.state = {
			name: 'User'
		};
	}

	loadModules() {
		require(['./account/main'], () => {
			console.log('account module has been loaded');
		});
		require(['./settings/main'], () => {
			console.log('settings module has been loaded');
		});
	}

	render() {
		return (
			<div>
				<h1>Welcome, {this.state.name}!</h1>
				<p>Application version {this.props.version}</p>
				<button onClick={this.loadModules.bind(this)}>Load me!</button>
			</div>
		);
	}
}
