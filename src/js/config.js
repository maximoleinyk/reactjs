import React from 'react';
import ReactDom from 'react-dom';

class Application extends React.Component {
	render() {
		return <h1>Hello</h1>
	}
}

ReactDom.render(<Application />, document.querySelector('#app'));