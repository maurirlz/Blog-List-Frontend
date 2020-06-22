import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <h2>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
