import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
//components
import Header from '../Header/Header';
import HomeList from '../HomeList/HomeList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
// import Footer from '../Footer/Footer';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={HomeList} />
          <Route path="/details/:movieId" component={Details}/>
          <Route path="/edit/:movieId" component={Edit} />
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}

export default App;
