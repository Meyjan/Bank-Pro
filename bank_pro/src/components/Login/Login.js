import React, { Component } from "react";
import LoginForm from "./LoginForm";
import NavigationBar from "../NavigationBar/NavigationBar";
import Cookies from "universal-cookie";
import "./Login.css";
import {Redirect} from "react-router-dom";
import request from "request";
import soap from "soap";

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
    
    const request = require("request");
    let xml = 
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:log="http://login/">
        <soapenv:Header/>
        <soapenv:Body>
          <log:AccountLogin>
              <arg0>` + account +  `</arg0>
          </log:AccountLogin>
        </soapenv:Body>
    </soapenv:Envelope>`;

    var options = {
      url: 'http://localhost:8080/ws_bank_war_exploded/services/Login?wsdl',
      method: 'POST',
      body: xml,
      headers: {
        'Content-Type':'text/xml;charset=utf-8',
      }
    };

    let callback = (error, response, body) => {
      console.log(body);
      if (!error && response.statusCode === 200) {
        console.log('Raw result', body);
        // var xml2js = require('xml2js');
        // var parser = new xml2js.Parser({explicitArray: false, trim: true});
        // parser.parseString(body, (err, result) => {
        //   console.log('JSON result', result);
        // });
      };
      console.log('E', response.statusCode, response.statusMessage);  
    };
    request(options, callback);


    // const cookie = new Cookies();
    // cookie.set("login", "testValue", { path: "/", expires: new Date(Date.now()+1800000)});
    // window.location.reload();
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
