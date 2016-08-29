import Component from 'common/component';
import {Link} from 'common/components';
import {Badge} from 'common/components';

class Navigation extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<nav className="navbar navbar-dark">
							<div className="nav navbar-nav">
                <Link to="/page/feed" className="nav-link nav-item">
                  <Badge>
                    <span>Feed</span>
                  </Badge>
                </Link>
                <Link to="/page/settings" className="nav-link nav-item">
                  Settings
                </Link>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
export default Navigation;
