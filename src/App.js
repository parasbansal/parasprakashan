import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar />
          <div className="mb-5"></div>
        </div>
      </div>
    );
  }
}

export default App;
