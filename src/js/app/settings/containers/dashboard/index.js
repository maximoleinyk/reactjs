/* global window */
import moment from 'moment';
import Component from 'common/component';

class ProfileSettings extends Component {
  constructor() {
    super();

    this.state = {
      time: this.getTime()
    };
  }

  render() {
    return (
      <div>
        <p>Profile settings</p>
          <button onClick={this.openDashboard.bind(this)}>Back home</button>
        <h3 style={{color: 'white'}}>{this.state.time}</h3>
      </div>
    );
  }

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        time: this.getTime()
      })
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  openDashboard() {
    this.navigateTo('/page');
  }

  getTime() {
    moment.locale('ru');

    return moment().format('LTS');
  }
}

export default ProfileSettings;
