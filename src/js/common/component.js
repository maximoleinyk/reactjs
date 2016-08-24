import {PropTypes, Component} from 'react';

class AppCompoennt extends Component {
	navigateTo(path) {
		this.context.router.push(path);
	}
}

AppCompoennt.contextTypes = {
	router: PropTypes.object.isRequired
};

export default AppCompoennt;
