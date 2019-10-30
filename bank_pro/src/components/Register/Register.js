import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";

const registerURL = `https://api.stya.net/nim/register`;

/**
 * Merupakan laman yang menangani proses register
 */
class Register extends Component {
  state = {
    registered: 0,
    status: undefined
  };

  /** Method yang menangani proses register dengan melakukan HTTP POST ke
   * API yang disediakan serta memberikan pesan apakah username dan password
   * yang diberikan oleh user diterima oleh API tersebut.
   */
  handleRegister = async e => {
    e.preventDefault();

    const registerName = e.target.elements.username.value;
    const registerPassword = e.target.elements.password.value;

    const details = {
      username: registerName,
      password: registerPassword
    };

    let formBody = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const register_call = await fetch(registerURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: formBody
    });
    const data = await register_call.json();

    console.log("Handle register received");
    console.log(data.code);
    console.log(data.status);

    if (data.code === 0) {
      this.setState({ registered: 1 });
    } else {
      this.setState({ registered: -1 });
      this.setState({ status: data.status });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="register-title-wrapper">
          <div className="register-title-text-wrapper">
            <h1>
              <font color="white">Register your new account Here!</font>
            </h1>
            <h3>
              <font color="white">
                Enter your desired username and password!
              </font>
            </h3>
          </div>
        </div>
        <div className="register-form-wrapper">
          <div className="register-form-text-wrapper">
            <RegisterForm onRegister={this.handleRegister} />
            {(this.state.registered === 1 || this.state.registered === -1) && (
              <p>---------------------</p>
            )}
            {this.state.registered === 1 && <p>Registration Success!</p>}
            {this.state.registered === -1 && <p>Registration Failed...</p>}
            {this.state.registered === -1 && <p>{this.state.status}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
