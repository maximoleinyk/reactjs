import Component from 'common/component';

class TextBox extends Component {
	render() {
		let {field, label, handler, ...rest} = this.props;
		let className = label ? '' : 'sr-only';

		return (
			<div className="form-group">
		   	<label className={className} htmlFor={field}>{label}</label>
				<input ref='input' type="text" id={field} name={field} className="form-control form-control-lg" {...rest}/>
			</div>
		)
	}

	componentDidMount() {
		this.refs.input.focus();
	}

	getValue() {
		return this.refs.input.value;
	}

	clear() {
		this.refs.input.value = '';
	}
}

export default TextBox;
