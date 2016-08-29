import {PropTypes} from 'react';
import Component from 'common/component';
import {Form, Fieldset, TextBox} from 'common/components';

class FeedBox extends Component {
	render() {
    let {defaultValue} = this.props;

		return (
			<Form onSubmit={this.props.handler}>
				<Fieldset legend={'new feed item'} srOnly={true}>
					<TextBox ref='textBox' srOnly={true} label='message'
          field="message" placeholder="Wazzaaaap?"
          defaultValue={defaultValue}/>
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
	handler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
};

export default FeedBox;
