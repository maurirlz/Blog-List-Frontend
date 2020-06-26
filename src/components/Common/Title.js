import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => {
  return <h2>{text || 'Title'}</h2>;
};

Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
};

export default Title;
