import React from 'react';

export default class Application extends React.Component {
	render() {
		return (
			<main className='layout-container'>
				<h1>Layout container</h1>
   			<section className='module-wrapper' id='app-content'>{this.props.children}</section>
   		</main>
		);
	}
}
