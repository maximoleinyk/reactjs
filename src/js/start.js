/* @flow */
import ReactDOM from 'react-dom';
import React from 'react';

export default class Application extends React.Component {
	render() {
		return <h1>Hello</h1>
	}
}

ReactDOM.render(<Application />, document.querySelector('#app'));
