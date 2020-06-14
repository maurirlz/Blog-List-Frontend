import React from 'react';
import Login from './Loginform';
import Title from '../Common/Title';

// setUsername={setUsername} username={username} password={password} setPassword={setPassword} handleLogin={handleLogin}
const LoginSection = ({ setUsername, username, setPassword, password, handleLogin }) => {
  return (
    <>
      <Title text="Log in"/>
      <br/>
      <Login handleLogin={handleLogin} setPassword={setPassword}
             setUsername={setUsername} password={password} username={username}/>
    </>
  );
}

export default LoginSection;