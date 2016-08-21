import 'css/containers/feed.scss';

import Component from 'common/component';
import Navigation from 'common/components/navigation';

class PageLayout extends Component {
	render() {
		return (
			<div className="container-fluid">
		   		<div className="row app-navbar">
						<div className="col-12">
       				<Navigation />
						</div>
       		</div>
					<div className="row">
						<div className="col-12">
     					{this.props.children}
						</div>
     			</div>
			</div>
		);
	}
}

export default PageLayout;
