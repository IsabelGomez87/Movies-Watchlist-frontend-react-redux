import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = ({
  isChecked, onChange, value, required, name, text,
}) => (
  <div>
    <input
      id={name}
      data-testid="checkbox"
      className="checkbox"
      name={name}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      value={value}
      required={required}
    />
    <span />
    <label
      htmlFor={name}
      className="checkbox-label"
    >
      {text}
    </label>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  text: PropTypes.string,
};

Checkbox.defaultProps = {
  value: null,
  onChange: null,
  required: false,
  isChecked: false,
  name: '',
  text: '',
};

export default Checkbox;
