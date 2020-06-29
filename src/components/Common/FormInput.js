import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ state, setState, text, type, name, id }) => {
  return (
    <div>
      {text}{' '}
      <input
        id={id}
        value={state}
        name={name}
        type={type}
        onChange={({ target }) => setState(target.value)}
      />
    </div>
  );
};

FormInput.propTypes = {
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  text: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FormInput;
