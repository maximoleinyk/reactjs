export default (props) => {
	let {srOnly, legend, children, ...rest} = props;

	return (
		<fieldset>
			<legend className={srOnly ? 'sr-only' : ''} {...rest}>{legend}</legend>
			{children}
		</fieldset>
	)
};
