/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, text, type, handleClick,
}) => (
  <button
    data-testid="button"
    className={className}
    type={type}
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  className: null,
  text: null,
  type: 'button',
  handleClick: null,
};

export default Button;
