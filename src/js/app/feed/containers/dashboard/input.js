import {connect} from 'react-redux';
import Component from 'common/component';
import {Form, Fieldset, TextBox} from 'common/components';
import {create} from './actions';

class FeedBox extends Component {
	render() {
		return (
			<Form onSubmit={this.create.bind(this)}>
				<Fieldset legend={'new feed item'} srOnly={true}>
		 			<TextBox ref='textBox' field="message" placeholder="What's up?"/>
				</Fieldset>
	 		</Form>
		);
	}

	create() {
		const value = this.refs.textBox.getValue().trim();

		if (!value.length) {
			return;
		}

		this.props.dispatch(create(value));
		this.refs.textBox.clear();
	}
}

export default connect()(FeedBox);
