import React, { Component } from "react";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";

class SignIn extends Component {
  state = {};
  componentDidMount() {
    var uiConfig = {
      signInSuccessUrl: "<url-to-redirect-to-on-success>",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "<your-tos-url>",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("<your-privacy-policy-url>");
      },
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start("#firebaseui-auth-container", uiConfig);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          id="firebaseui-auth-container"
          style={{ marginTop: "25vh" }}
        ></div>
      </React.Fragment>
    );
  }
}

export default SignIn;
