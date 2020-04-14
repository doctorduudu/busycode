import React, { Component } from "react";
import * as firebase from "firebase/app";
// import { Link } from "react-router-dom";
// import Logo from "../img/BC-logo.png";

class NavBar extends Component {
  state = {};

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ signedIn: true });
        // ...
      } else {
        // User is signed out.
        this.setState({ signedIn: false });
        console.log("user is signed out");
        // ...
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          setTimeout(function () {
            window.location = "/sign-in";
          }, 2000);
          console.log("Signed Out");
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  };

  render() {
    return (
      <div>
        <nav>
          <div id="navbar-brand">
            <a href="/">BusyCode GH</a>
            {/* <img src={Logo} id="logo" /> */}
          </div>
          <div>
            <ul id="navlinks">
              <li>
                <a href="/learn">Learn</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              {!this.state.signedIn && (
                <li>
                  <a href="/sign-in">Sign Up</a>
                </li>
              )}
              {this.state.signedIn && (
                <li>
                  <a href="/" onClick={this.signOutUser}>
                    Sign Out
                  </a>
                </li>
              )}
              <li>
                <a href="/lesson-upload">Upload</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
