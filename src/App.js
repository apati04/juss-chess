import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
// import Game from './Game';
import firebase from 'firebase';
firebase.initializeApp({
  "apiKey": "AIzaSyDiMKaCP3EIkq4E4_kWyUSHDjcmT6XUbZ8",
  "databaseURL": "https://authentication-5e6b5.firebaseio.com",
  "storageBucket": "authentication-5e6b5.appspot.com",
  "authDomain": "authentication-5e6b5.firebaseapp.com",
  "messagingSenderId": "944850662850",
  "projectId": "authentication-5e6b5"
});

class App extends Component {
  render() {
    return(
      <HashRouter>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Game}/> */}
      </HashRouter>
    )
  }
}

export default App;
