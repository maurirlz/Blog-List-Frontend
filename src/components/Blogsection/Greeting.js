import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Common/Title';
import Button from '../Common/Button';

const Greeting = ({ textTitle, username, handleLogout }) => {
  return (
    <>
      <Title text={textTitle} />
      <p>{username} logged in.</p>{' '}
      <Button text="logout" clickHandler={handleLogout} />
    </>
  );
};

Greeting.propTypes = {
  textTitle: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Greeting;
