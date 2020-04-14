import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBHOWv3A2HJSWhPGiZldwstUZoGa1yrKc8",
  authDomain: "busycode-b66fa.firebaseapp.com",
  databaseURL: "https://busycode-b66fa.firebaseio.com",
  projectId: "busycode-b66fa",
  storageBucket: "busycode-b66fa.appspot.com",
  messagingSenderId: "696311215856",
  appId: "1:696311215856:web:f8dd94f4a03a825f4ef435",
  measurementId: "G-QGDGT3K3MS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("user is signed in");
    // User is signed in.
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;

    // console.log("display name", displayName);
    // console.log("email", email);
    // console.log("user id", uid);
    // console.log("provider data", providerData);
    // console.log("photo url", photoURL);
    // ...
  } else {
    // User is signed out.
    console.log("user is signed out");
    // ...
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
