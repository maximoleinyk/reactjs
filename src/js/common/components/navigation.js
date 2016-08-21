import Component from 'common/component';
import Link from 'common/components/link';

class Navigation extends Component {
	render() {
		return (
			<div className="container">
		   	<div className="row">
		    	<div className="col-xs-12">
						<nav className="navbar navbar-dark">
							<a className="navbar-brand" href="/page">App-X</a>
						  <div className="nav navbar-nav">
						    <Link to="/page/feed">Feed</Link>
								<Link to="/page/settings">Settings</Link>
						  </div>
						</nav>
					</div>
		    </div>
		   </div>
		);
	}
}

export default Navigation;
