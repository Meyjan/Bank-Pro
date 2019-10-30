import React, { Component } from "react";
import LoginForm from "./LoginForm";
import NavigationBar from "../NavigationBar/NavigationBar";
import Cookies from "universal-cookie";
import "./Login.css";

const registerURL = "<TARGET WEBSITE>";

/**
 * Merupakan laman yang menangani proses login
 */
class Login extends Component {
  state = {
    loginFail: false,
    status: undefined
  };

  /**
   * Melakukan HTTP POST ke API yang disediakan untuk menentukan
   * apakah nama dan password tersebut sudah terdaftar dan user
   * layak login. Jika ya, berikan user token, jika tidak, berikan pesan error
   */
  handleLogin = async e => {
    // Handles LOGIN ==> CHANGE PLZ
    e.preventDefault();

    const account = e.target.elements.username.value;

    let formBody = [];
    const encodedKey = encodeURIComponent(account);
    formBody.push("ACCOUNT = " + encodedKey);
    console.log(formBody);

    // const register_call = await fetch(registerURL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    //   },
    //   body: formBody
    // });
    // const data = await register_call.json();

    // Check data to set coookie NOWWWO

    const cookie = new Cookies();
    cookie.set("login", "testValue", { path: "/", expires: new Date(Date.now()+1800000)});
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <div className="row">
          <div className="login-title-wrapper">
            <div className="login-title-text-wrapper">
              <h1>
                <font color="white">Log into your account Here!</font>
              </h1>
              <h3>
                <font color="white">Enter your username and password!</font>
              </h3>
            </div>
          </div>
          <div className="login-form-wrapper">
            <div className="login-form-text-wrapper">
              <LoginForm onLogin={this.handleLogin} />
              {this.state.loginFail && <p>---------------</p>}
              {this.state.loginFail && <p>Login Failed...</p>}
              {this.state.loginFail && <p>{this.state.status}</p>}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
