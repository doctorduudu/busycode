import React, { Component } from "react";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";

class SignIn extends Component {
  state = {};
  componentDidMount() {
    const urlTo = this.props.match.params.urlTo;
    const id = this.props.match.params.id;
    console.log(urlTo, id);

    var uiConfig = {
      signInSuccessUrl: id ? `/${urlTo}/${id}` : `/${urlTo}`,
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "/terms-of-service",
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign("/privacy-policy");
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
