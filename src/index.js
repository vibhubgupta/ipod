import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAFEMoVg-IAQ3RSgbgg7WDiT9AIHbZEfPw",
  authDomain: "ipod-eba36.firebaseapp.com",
  databaseURL: "https://ipod-eba36.firebaseio.com",
  projectId: "ipod-eba36",
  storageBucket: "ipod-eba36.appspot.com",
  messagingSenderId: "1003957937173",
  appId: "1:1003957937173:web:ceee8ae6375fbec1fd9a1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render( <React.StrictMode><App /></React.StrictMode>, document.getElementById('root') );