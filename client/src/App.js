import React, { Component } from 'react';
import Header from './HeaderComponent/Header';
import Main from './MainComponents/Main';
import NavBar from './NavigationComponent/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Main />
      </div>
    );
  }
}
export default App; 
