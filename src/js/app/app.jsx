import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, IndexRoute} from 'react-router'

class Application extends React.Component {
	constructor() {
		super();
		this.state = {
			name: 'User'
		};
	}

	loadModules() {
		require.ensure(['./account/main'], (require) => {
			console.log(`account module has been loaded`);
			require.ensure(['./settings/main'], () => {
				console.log(`settings module has been loaded`);
			});
		});
	}

	render() {
		return (
			<div>
			<h1>Welcome, {this.state.name}!</h1>
			<p>Application version {this.props.version}</p>
			<button onClick={this.loadModules}>Load me!</button>
			</div>
		);
	}
}

ReactDOM.render(<Application version="0.0.1"/>, document.querySelector('#app'));
