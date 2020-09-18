import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

// function App() 
class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      songs: [],
      loading: true
    };
    this.db = firebase.firestore();
  }



  render() {
    return (
      <div className="App">
        <div className='ipod-container'>
          <div className='ipod-screem'>
            <div className='ipod-menu'>
              
            </div>
          </div>
          <div className='ipod-buttons'>

          </div>
        </div>
      </div>
    );
  }
}


export default App;
