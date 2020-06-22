import React, { useState } from "react";

const Togglable = ({ children, positiveButtonLabel, negativeButtonLabel }) => {
  const [visible, setVisible] = useState(false);

  const isHidden = { display: visible ? "none" : "" };
  const isShow = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

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
};

export default Togglable;
