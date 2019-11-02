import React, { Component } from "react";
import "./App.css";

import Router from "./components/Router/Router";
import NavigationBarBottom from "./components/NavigationBar_Bottom/NavigationBarBottom";

/**
 * Class utama yang menampilkan hasil render dari semua komponen di bawahnya
 */
class App extends Component {
  state = {
    showScreen: "title",
    loggedIn: false,
    authToken: ""
  };

  /**
   * Handle jika sudah login. Mengganti laman menjadi search dan set token menjadi authorityToken yang didapatkan
   */
  handleLoggedIn = token => {
    this.setState({ showScreen: "search" });
    this.setState({ loggedIn: true });
    this.setState({ authToken: token });
  };

  /**
   * Handle jika sudah logout. Mengganti laman menjadi title dan set token menjadi unknown (sudah loggedOut)
   */
  handleLoggedOut = () => {
    this.setState({ showScreen: "title" });
    this.setState({ loggedIn: false });
    this.setState({ authToken: undefined });
  };

  render() {
    // Di atas Fragment buatlah NavBar dahulu untuk pindah laman
    return (
      <React.Fragment>
        <div className="bg">
          <Router/>
        </div>
        <NavigationBarBottom />
      </React.Fragment>
    );
  }
}

export default App;
