import Component from 'common/component';

class Item extends Component {
	constructor(props) {
		super();

		this.state = props.data;
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
