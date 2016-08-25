import {connect} from 'react-redux';
import Component from 'common/component';
import {Form, Fieldset, TextBox} from 'common/components';
import {remove, update} from './actions';

class Item extends Component {
	constructor() {
		super();

		this.state = {
			readMode: true
		};
	}

	remove() {
		this.props.dispatch(remove(this.props.item.id));
	}

	showInput() {
		this.setState({
			readMode: false
		});
	}

	updateItem() {
		const value = this.refs.textBox.getValue().trim();

		if (!value.length) {
			return;
		}

		this.props.dispatch(update({
			id: this.props.item.id,
			text: value
		}));
		this.setState({
			readMode: true
		});
	}

	change() {
		console.log('changed');
	}

	render() {
		let input = (
			<div className="flex">
				<div className="flex-grow-1 ellipsis" onDoubleClick={this.showInput.bind(this)}>
					<Form onSubmit={this.updateItem.bind(this)}>
						<Fieldset legend={'update'} srOnly={true}>
							<TextBox ref='textBox' field="message" placeholder="What's up?" defaultValue={this.props.item.text}/>
						</Fieldset>
					</Form>
				</div>
			</div>
		);
		let text = (
			<div className="flex">
				<div className="flex-grow-1 ellipsis" onDoubleClick={this.showInput.bind(this)}>
					{this.props.item.text}
				</div>
				<button className="btn btn-link" onClick={this.remove.bind(this)}>
					<span className="fa fa-close"></span>
				</button>
			</div>
		);

		return this.state.readMode ? text : input;
	}
}

export default connect()(Item);
