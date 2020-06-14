import React from 'react';
import PasswordInput from './PasswordInput'
import UsernameInput from './UsernameInput';
import FormButton from './FormButton';

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {

  return (
    <div>
      <form onSubmit={handleLogin}>
        <UsernameInput username={username} setUsername={setUsername}/>
        <PasswordInput password={password} setPassword={setPassword}/>
        <FormButton type='submit' text='submit'/>
      </form>
    </div>
  )
}

export default Login