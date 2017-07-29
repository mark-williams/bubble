import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortContainer from './components/SortContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome</h2>
    </div>
    <div className="container">
      <SortContainer />
    </div>
  </div>
);

export default App;
