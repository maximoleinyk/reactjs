import Component from 'common/component';
import Input from './input';
import List from './list';

class Feed extends Component {
	render() {
		return (
			<div className="container app-feed">
		   	<div className="row">
		    	<section className="col-xs-12">
						<Input />
					</section>
		    </div>
				<div className="row">
					<section className="col-xs-12">
						<List />
					</section>
    		</div>
		  </div>
		);
	}
}

export default Feed;
