import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Welcome to React Boiler Plate</h1>
          <Header />
        </div>
      </Router>
    );
  }
}
export default App; 
