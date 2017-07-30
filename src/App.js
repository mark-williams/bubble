import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortContainer from './components/SortContainer';

const generateNumberArray = (numberOfItems) => {
  const list = [];
  let count = numberOfItems;
  while (count) {
    const num = Math.floor(Math.random() * 1000);
    list.push(num);
    count -= 1;
  }

  return list;
};

const unsorted = generateNumberArray(100);

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
