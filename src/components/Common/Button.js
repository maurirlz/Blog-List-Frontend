import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ clickHandler, text }) => {
  return (
    <>
      <button type="button" onClick={clickHandler}>
        {text || 'click me'}
      </button>
    </>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
};

export default Button;
