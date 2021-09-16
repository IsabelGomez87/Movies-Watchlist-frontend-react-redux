import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({
  value, placeholder, type, onChange, required,
}) => (
  <input
    className="input-text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    required={required}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,

};

Input.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  placeholder: null,
  type: 'text',
};

export default Input;
