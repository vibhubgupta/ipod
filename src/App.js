import React from "react";
import './App.css';
import Ipod from "./Ipod.js";


// import * as firebase from "firebase";

// function App() 
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      songs: [],
    };
    // this.db = firebase.firestore();
  }

  render() {
    return (
      <div className="App">
        <h1>Ipod</h1>
        <Ipod

        />
      </div>
    );
  }
}


export default App;
