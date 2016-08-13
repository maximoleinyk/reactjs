import React from 'react';
import {IndexLink} from 'react-router';

export default class AppLink extends React.Component {
	render() {
		return <IndexLink {...this.props} activeClassName='selected'/>;
	}
}
