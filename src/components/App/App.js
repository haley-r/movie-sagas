import React, { Component } from 'react';
import './App.css';
//components
import Header from '../Header/Header';
import HomeList from '../HomeList/HomeList';
// import Footer from '../Footer/Footer';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <HomeList />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
