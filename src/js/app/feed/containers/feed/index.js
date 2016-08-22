import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Component from 'common/component';
import FeedBox from './feedBox';
import FeedList from './feedList';
import {feedItems} from './reducer';

class Feed extends Component {
	constructor() {
		super();

		this.store = createStore(feedItems, window.devToolsExtension && window.devToolsExtension());
	}

	render() {
		return (
			<div className="container app-feed">
		   	<div className="row">
		    	<section className="col-xs-12">
						<FeedBox store={this.store}/>
					</section>
		    </div>
				<div className="row">
					<section className="col-xs-12">
						<FeedList store={this.store}/>
					</section>
    		</div>
		  </div>
		);
	}
}

export default Feed;
