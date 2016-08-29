import {PropTypes} from 'react';

const FieldSet = (props) => {
  let {srOnly, legend, children, ...rest} = props;

  return (
    <fieldset>
      <legend className={srOnly ? 'sr-only' : ''} {...rest}>{legend}</legend>
      {children}
    </fieldset>
  )
};

FieldSet.propTypes = {
  srOnly: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default FieldSet;
