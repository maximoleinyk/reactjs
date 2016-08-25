import Component from 'common/component';

class Item extends Component {
	constructor(props) {
		super();

		this.state = props.data;
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.data.text !== this.props.data.text;
	}

	render() {
		return (
			<div>
				{this.state.text}
			</div>
		);
	}
}

export default Item;
