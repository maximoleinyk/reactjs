import React from 'react';
import Component from 'common/component';

class Form extends Component {
	render() {
		let {onSubmit, ...rest} = this.props;

		return (
			<form autoComplete="off" onSubmit={this.submit.bind(this)} {...rest}>
				{this.props.children}
			</form>
		);
	}

	submit(...args) {
		args[0].preventDefault();
		this.props.onSubmit(...args);
	}
}

Form.propTypes = {
	onSubmit: React.PropTypes.func.isRequired
};

export default Form;
