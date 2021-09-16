import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  isChecked, onChange, value, required, id, text,
}) => (
  <div>
    <input
      id={id}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      value={value}
      required={required}
    />
    <span />
    <label htmlFor={id}>{text}</label>
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isChecked: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string,
};

Input.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  isChecked: false,
  id: '',
  text: '',
};

export default Input;
