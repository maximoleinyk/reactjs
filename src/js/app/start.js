import React from 'react';
import ReactDom from 'react-dom';

class Application extends React.Component {
	render() {
		return <div>Hello</div>
	}
}

ReactDom.render(<Application />, document.querySelector('#app'));