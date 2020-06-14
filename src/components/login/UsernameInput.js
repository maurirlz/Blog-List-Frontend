import React from 'react';

const UsernameInput = ({ username, setUsername }) => {

  return (
    <div>
      username <input
      value={username}
      name="username"
      type="text"
      onChange={({target}) => setUsername(target.value)}
    />
    </div>
  )
}

export default UsernameInput;