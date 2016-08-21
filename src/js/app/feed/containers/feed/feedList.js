import Component from 'common/component';

class FeedList extends Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}

	render() {
		let items = this.state.items.length ? this.state.items.map((item) => {
			return <li>item</li>;
		}) : <li>No items</li>;

		return (
			<div className="text-sm-center">
				<ul className="list-unstyled">
					{items}
				</ul>
   		</div>
		);
	}
}

export default FeedList;
