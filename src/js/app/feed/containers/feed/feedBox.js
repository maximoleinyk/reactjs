import {connect} from 'react-redux';
import Component from 'common/component';
import TextBox from 'common/components/textBox';
import Form from 'common/components/form';
import {create} from './actions';

class FeedBox extends Component {
	render() {
		return (
			<Form ref='form' onSubmit={this.create.bind(this)}>
	 			<TextBox ref='textBox' field="message" placeholder="What's up?"/>
	 		</Form>
		);
	}

	create() {
		const value = this.refs.textBox.getValue().trim();

		if (!value.length) {
			return;
		}

		this.props.store.dispatch(create(value));
		this.refs.textBox.clear();
	}
}

export default FeedBox;
