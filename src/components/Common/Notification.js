import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, id }) => {
  if (message === null) {
    return null;
  }

  return (
    <div>
      <p id={id}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
