import React from "react";

/**
 * Merupakan laman form login
 */
const LoginForm = props => (
  <form onSubmit={props.onLogin}>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Account
        </span>
      </div>
      <input
        type="text"
        name = "username"
        className="form-control"
        placeholder="Acc. Number..."
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
    <button className="btn btn-outline-secondary btn-lg" type = "submit">Login!</button>
  </form>
);

export default LoginForm;
