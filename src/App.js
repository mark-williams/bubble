import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortContainer from './components/SortContainer';

const unsorted = [8, 4, 23, 17, 9, 2, 16, 212, 78, 3, 19, 44, 2];

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome</h2>
    </div>
    <div className="container">
      <SortContainer numbersToSort={unsorted} />
    </div>
  </div>
);

export default App;
