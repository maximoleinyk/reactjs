import React from 'react';
import AppLink from 'common/components/link';

export default class AccountDashboard extends React.Component {
	render() {
		return (
			<div className='page-content account-layout'>
				<header>
		    	<h1>Account page layout</h1>
		    </header>
				<nav>
		    	<ul>
						<li>
							<AppLink to='/page'>Back home</AppLink>
						</li>
					</ul>
		    </nav>
				<div className='component-wrapper'>
					{this.props.children}
				</div>
			</div>
		);
	}
}
