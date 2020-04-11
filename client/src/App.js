import React, { Component } from 'react';
import logo from './twii12.png';
import './App.css';
import ProfileTetxbox from './components/profilebox';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo}  alt="logo" />
          <ProfileTetxbox htmlclass="fullHeight"/>
      </div>
    );
  }
}

export default App;
