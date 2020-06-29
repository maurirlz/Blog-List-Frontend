import React from 'react';
import PropTypes from 'prop-types';

const FormButton = ({ text, type }) => {
  return <button id="formButton" type={type}>{text || 'click me'}</button>;
};

FormButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default FormButton;
