import {Component} from 'react';
import history from 'common/history';

export default class AppCompoennt extends Component {
	navigateTo(path) {
			history.push(path);
	}
}
