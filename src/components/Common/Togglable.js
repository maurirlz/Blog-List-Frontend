import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";

const Togglable = React.forwardRef(
  ({ children, positiveButtonLabel, negativeButtonLabel }, ref) => {
    const [visible, setVisible] = useState(false);

    const isHidden = { display: visible ? "none" : "" };
    const isShow = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
      setVisible(!visible);
    };

    useImperativeHandle(ref, () => {
      return {
        toggleVisibility,
      };
    });

    return (
      <div>
        <div style={isHidden}>
          <button onClick={toggleVisibility}>{positiveButtonLabel}</button>
        </div>
        <div style={isShow}>
          {children}
          <button onClick={toggleVisibility}>{negativeButtonLabel}</button>
        </div>
      </div>
    );
  }
);

Togglable.propTypes = {
  positiveButtonLabel: PropTypes.string.isRequired,
  negativeButtonLabel: PropTypes.string.isRequired,
};

export default Togglable;
