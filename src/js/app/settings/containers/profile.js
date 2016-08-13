import Component from 'common/component';

export default class ProfileSettings extends Component {
	openDashboard() {
		this.navigateTo('/page');
	}

	render() {
		return (
			<div>
				<p>Profile settings</p>
				<button onClick={this.openDashboard.bind(this)}>Back home</button>
			</div>
		);
	}
}
