import {Component} from 'react';

export default class Application extends Component {
	render() {
		return (
			<div>
				<h1>Welcome, {this.state.name}!</h1>
				<p>Application version {this.props.version}</p>
			</div>
		);
	}
}
