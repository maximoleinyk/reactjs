import Component from 'common/component';

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>Sorry, page is not found!</h1>
				<button onClick={() => this.navigateTo('/page')}>Back home</button>
			</div>
		);
	}
}
