import Component from 'common/component';
import FeedBox from './feedBox';
import FeedList from './feedList';

class Feed extends Component {
	render() {
		return (
			<div className="container app-feed">
		   	<div className="row">
		    	<section className="col-xs-12">
						<FeedBox />
					</section>
		    </div>
				<div className="row text-xs-center">
    			<div className="col-xs-12">
       			<FeedList />
       		</div>
    		</div>
		  </div>
		);
	}
}

export default Feed;
