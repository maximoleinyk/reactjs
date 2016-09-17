import {PropTypes} from 'react';
import Component from 'common/component';

class TextBox extends Component {
	constructor() {
		super();

		this.state = {
			disabled: false
		};
	}
	render() {
		let {field, label, srOnly, ...rest} = this.props;
		let className = srOnly ? 'sr-only' : '';

		return (
			<div class="form-group">
				<label class={className} for={field}>{label}</label>
				<input type="text" id={field} name={field} ref='input'
          class="form-control form-control-lg"
          disabled={this.state.disabled} {...rest}/>
			</div>
		)
	}

	focus() {
		this.refs.input.focus();
	}

	disable() {
		this.setState({
			disabled: true
		});
	}

	enable() {
		this.setState({
			disabled: false
		});
	}

	getValue() {
		return this.refs.input.value;
	}

	select() {
		return this.refs.input.select();
	}

	clear() {
		this.refs.input.value = '';
	}
}

TextBox.propTypes = {
	field: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	srOnly: PropTypes.bool
};

export default TextBox;
