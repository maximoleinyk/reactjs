import {connect} from 'react-redux';
import Component from 'common/component';
import Input from './input';
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

	update() {
		const value = this.refs.input.getValue();

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

	render() {
		let input = (
			<div className="flex">
				<div className="flex-grow-1 ellipsis">
					<Input ref='input' handler={this.update.bind(this)}/>
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
