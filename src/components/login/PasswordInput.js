import React from 'react';

const PasswordInput = ({ password, setPassword }) => {
  return (
    <div>
      password <input
      value={password}
      name="password"
      type="password"
      onChange= {({target}) => setPassword(target.value)}
    />
    </div>
  )
}

export default PasswordInput;