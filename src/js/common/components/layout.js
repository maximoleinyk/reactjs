import 'css/main';

import Component from 'common/component';

export default class Application extends Component {
	render() {
		return (
			<main className='layout-container'>
				<h1>Layout container</h1>
   			<section className='module-wrapper' id='app-content'>{this.props.children}</section>
   		</main>
		);
	}
}
