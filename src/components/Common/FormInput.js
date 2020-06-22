import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ state, setState, text, type, name }) => {
  return (
    <div>
      {text}{' '}
      <input
        value={state}
        name={name}
        type={type}
        onChange={({ target }) => setState(target.value)}
      />
    </div>
  );
};

FormInput.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FormInput;
