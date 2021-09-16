import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  value, text, isSelected, onChange, required, id,
}) => (
  <div className="RadioButton">
    <input id={id} type="radio" onChange={onChange} value={value} name="test" checked={isSelected} required={required} />
    <label htmlFor={id}>{text}</label>
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
};

Input.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  text: '',
  isSelected: false,
  id: '',
};

export default Input;
