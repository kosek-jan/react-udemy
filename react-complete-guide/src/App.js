import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>sup</h1>
        <Person name="Lulec" age="69"></Person>
        <Person name="Pulec" age="13"></Person>
      </div>
    );
  }
}

export default App;
