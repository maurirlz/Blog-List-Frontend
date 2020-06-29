import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Common/FormInput';
import FormButton from '../Common/FormButton';
import Title from '../Common/Title';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const createUser = (event) => {
    event.preventDefault();
    handleLogin({
      username,
      password,
    });

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <Title text="Login" />
      <form onSubmit={createUser}>
        <FormInput
          id="usernameInput"
          state={username}
          setState={setUsername}
          text="username"
          name="username"
          type="text"
        />
        <FormInput
          id="passwordInput"
          state={password}
          setState={setPassword}
          text="password"
          name="password"
          type="password"
        />
        <FormButton type="submit" text="submit" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
