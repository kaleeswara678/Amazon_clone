// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        
      </div>
    </Router>
  );
}

export default App;
