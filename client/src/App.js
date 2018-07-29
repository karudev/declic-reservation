import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BusinessCenterForm from './Form/BusinessCenterForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">H-CENTER</h1>
        </header>
          <div class="container">
            <BusinessCenterForm />
          </div>
      </div>
    );
  }
}

export default App;
