import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchHome from './FetchData/FetchHome';
import Home from './CountryData/Home';

function App() {
  return (
    <div className="App">
      <FetchHome/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
