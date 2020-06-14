import React from 'react';
import FormInput from '../Common/FormInput';
import FormButton from '../Common/FormButton';

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {

  return (
    <div>
      <form onSubmit={handleLogin}>
        <FormInput state={username} setState={setUsername} text="username" name="username" type="text"/>
        <FormInput state={password} setState={setPassword} text="password" name="password" type="password"/>
        <FormButton type='submit' text='submit'/>
      </form>
    </div>
  )
}

export default Login