import React from 'react';
import Title from '../Common/Title';
import Button from '../Common/Button';

const Greeting = ({ textTitle, username, handleLogout }) => {
  return (
    <>
      <Title text={textTitle}/>
      <p>{username} logged in.</p> <Button text="logout" clickHandler={handleLogout}/>
    </>
  );
};

export default Greeting;