import {PropTypes} from 'react';
import Component from 'common/component';
import {Form, Fieldset, TextBox} from 'common/components';

class FeedBox extends Component {
	render() {
		return (
			<Form onSubmit={this.props.handler}>
				<Fieldset legend={'new feed item'} srOnly={true}>
		 			<TextBox ref='textBox' field="message" placeholder="What's up?"/>
				</Fieldset>
	 		</Form>
		);
	}

	getValue() {
		return this.refs.textBox.getValue().trim();
	}

	clear() {
		return this.refs.textBox.clear();
	}
}

FeedBox.propTypes = {
	handler: PropTypes.func.isRequired
};

export default FeedBox;
