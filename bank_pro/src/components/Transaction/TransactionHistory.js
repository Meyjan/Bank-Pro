import React from "react";
import "./TransactionHistory.css";
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

/**
 * Merupakan laman Help yang memberikan basa-basi mengenai fitur yang terdapat dalam program ini
 */
const TransactionHistory = () => {
  return (
    <React.Fragment>
      <NavigationBar/>
        <div className="help-wrapper">
          <div className="help-margin">
            <div className="help-title">
              <b>HELP</b>
            </div>
            <div className="help-text">
              <p>
                <b>REGISTER</b>
              </p>
              <p>
                Enter your desired username and password at the provided input box.
                After that, click the register button It may have been taken by
                others though, but usually it haven't been taken by others, so
                usually you won't have to rethink for your username and password.
                After being registered, you can access your log into your account so
                that you can start <i>stalking</i>.
              </p>
              <p>
                <b>LOGIN</b>
              </p>
              <p>
                Log into your account that you have been registered. You can input
                your username and your password at the provided space and hit the
                login button. After logging in, you now gain access to the API and
                now can start <i>stalking</i>. Remember to register first if you
                don't have an account. Otherwise, you won't be able to login (
                <i>obviously</i>).
              </p>
              <p>
                <b>SEARCH</b>
              </p>
              <p>
                Your stalking machine! Be it your friend's NIM or name, this machine
                can look up the details for you! Just enter your query at the
                provided space and click on the search button to start searching.
                This machine will then return the result it gets from the API, which
                is the list of name and the details about that person which has the
                same criteria as your query (or nothing if it doesn't match with
                anything). Do remember, this feature is only accessible once you've
                logged in.
              </p>
              <p>
                <b>LOGOUT</b>
              </p>
              <p>
                Log out from your account. This feature is only accessible once
                you've logged in. Though I should say you shouldn't use this feature
                because it's preventing you from stalking your friends. I suggest
                you should only use this feature once doctors and psychiatrists come
                into your house because you've done too much stalking.
              </p>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default TransactionHistory;
