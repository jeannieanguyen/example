import React, { Component } from 'react';
import './App.css';
import Menu from './components/index'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Awesome Code Challenge</h2>
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
