import React from 'react'

const FormInput = ({ state, setState, text, type, name }) => {

  return (
    <div>
      {text} <input
        value={state}
        name={name}
        type={type}
        onChange={({ target }) => setState(target.value)}
      />
    </div>
  )
}

export default FormInput