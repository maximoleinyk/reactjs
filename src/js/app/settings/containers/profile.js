import React from 'react';
import Link from 'common/components/link';

export default class ProfileSettings extends React.Component {
	render() {
		return (
			<div>
				<p>Profile settings</p>
				<Link to='/page'>Back home</Link>
			</div>
		);
	}
}
