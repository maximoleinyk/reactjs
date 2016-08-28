// @flow
import {PropTypes, Component} from 'react';

class AppCompoennt extends Component {
	navigateTo(path: string) {
		this.context.router.push(path);
	}
}

AppCompoennt.contextTypes = {
	router: PropTypes.object.isRequired
};

export default AppCompoennt;
