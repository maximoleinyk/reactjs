import Component from 'common/component';
import TextBox from 'common/components/textBox';
import Form from 'common/components/form';

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

		console.log(value);
	}
}

export default FeedBox;
