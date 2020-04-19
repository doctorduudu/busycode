import React, { Component } from "react";
import * as firebase from "firebase/app";
import SignIn from "./signIn";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import Logo from "../img/BC-logo.png";

class NavBar extends Component {
  state = {
    signedIn: false,
    user: {},
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({ signedIn: true, user });
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
            window.location = "/sign-in/home";
          }, 2000);
          // console.log("Signed Out");
          toast.success("Successfully signed out. See you again soon");
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  };

  render() {
    const { signedIn, user } = this.state;

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
              {/* <li>
                <a href="/faq">FAQ</a>
              </li> */}
              {!signedIn && (
                <li>
                  <a href="/sign-in/home">Sign Up/In</a>
                </li>
              )}
              {signedIn && (
                <li className="sign-out-btn">
                  <span onClick={this.signOutUser}>Sign Out</span>
                </li>
              )}
              {SignIn && user.uid === "88nHhyFPsEbuROsCKGXAvaQpcxq1" && (
                <li>
                  <a href="/lesson-upload">Upload</a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
