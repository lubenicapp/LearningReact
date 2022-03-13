import logo from './logo.svg';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <main clasSName="container">
        <Counters/>
      </main>

    </React.Fragment>

  );
}

export default App;
