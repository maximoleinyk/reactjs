import {Component} from 'common';
import {Link, Badge} from 'common/components';

class Navigation extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <nav class="navbar navbar-dark">
              <div class="nav navbar-nav">
                <Link to="/page/feed" class="nav-link nav-item">
                  <Badge>
                    <span>Feed</span>
                  </Badge>
                </Link>
                <Link to="/page/settings" class="nav-link nav-item">
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
