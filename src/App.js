import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Places from './components/Places';
import PlaceDetails from './components/PlaceDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <div>
            <Route exact component={Places} path='/' />
            <Route exact component={PlaceDetails} path='/placeDetails' />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
