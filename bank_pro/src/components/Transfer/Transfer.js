import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Cookies from "universal-cookie";
import "./Transfer.css";
import TransferForm from "./TransferForm";
/**
 * Merupakan laman Transfer yang memberikan basa-basi mengenai fitur yang terdapat dalam program ini
 */

class Transfer extends Component {
  constructor() {
    super();
    const cookie = new Cookies();
    this.state.cookieId = cookie.get("login").split(";")[0];
  }

  state = {
    trfStatus: undefined,
    trfMessage: "Error not loaded."
  };
  
  handleTrf = async e => {
    // Handles Login
    e.preventDefault();

    // Getting transfer details
    const senderAcc = e.target.elements.sender_acc.value;
    const receiverAcc = e.target.elements.receiver_acc.value;
    const trfAmount = e.target.elements.trf_amount.value;
    
    // Sending request using SOAP to ws-bank
    const request = require("request");
    let xml = 
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service/">
        <soapenv:Header/>
        <soapenv:Body>
          <ser:TransferResult>
              <!--Optional:-->
              <arg0>` + senderAcc + `</arg0>
              <!--Optional:-->
              <arg1>` + receiverAcc + `</arg1>
              <!--Optional:-->
              <arg2>` + trfAmount + `</arg2>
          </ser:TransferResult>
        </soapenv:Body>
    </soapenv:Envelope>`;

    // Target wsdl
    var options = {
      url: 'http://localhost:8080/ws-bank/service/Transfer?wsdl',
      method: 'POST',
      body: xml,
      headers: {
        'Content-Type':'text/xml;charset=utf-8',
      }
    };

    // Get the callback from the result
    let callback = (error, response, body) => {
      console.log(body);
      if (!error && response.statusCode === 200) {
        // Get return 
        let result = new DOMParser().parseFromString(body, 'text/xml');
        result = result.getElementsByTagName('return')[0];
        
        this.setState({trfStatus: result.childNodes[0].textContent})

        if (this.state.trfStatus === "2002") {
          this.setState({
            trfMessage: "Transfer Success."
          })
          // window.location.reload();
        }
        else if (this.state.trfStatus === "2000"){
          this.setState({trfMessage: "Failed to update your account's balance."})
        }
        else if (this.state.trfStatus === "2001"){
          this.setState({trfMessage: "Failed to update receiver account's balance."})
        }
        else if (this.state.trfStatus === "4001"){
          this.setState({trfMessage: "Receiver account/virtual number is invalid."})
        }
        else if (this.state.trfStatus === "4002"){
          this.setState({trfMessage: "Insufficient balance."})
        }
        else if (this.state.trfStatus === "4003"){
          this.setState({trfMessage: "Failed to get your account's balance."})
        }
        else if (this.state.trfStatus === "4004"){
          this.setState({trfMessage: "Failed to update your account's data."})
        }
        else if (this.state.trfStatus === "4005"){
          this.setState({trfMessage: "Failed to update receiver account's data."})
        }
        else if (this.state.trfStatus === "4006"){
          this.setState({trfMessage: "Failed to record transaction details."})
        }
        else if (this.state.trfStatus === "4007"){
          this.setState({trfMessage: "Failed to get your account's balance. (2)"})
        }
        else {
          console.log("out");
          this.setState({
            trfStatus: false,
            status: "Transfer Failed."
          });
        }
      };
    };

    request(options, callback);
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
      <div className="trf-wrapper">
        <div className="trf-margin">
          <div className="trf-title">
            <b>TRANSFER</b>
          </div>
          <div className="trf-text">
          </div>
          <TransferForm onTrf={this.handleTrf} trfst={this.state.trfMessage} senderNo={this.state.cookieId} />
        </div>
      </div>
      
      </React.Fragment>
    );
  };
}

export default Transfer;
