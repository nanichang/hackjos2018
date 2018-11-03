import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import Loader from './components/layouts/Loader';
import BackToTop from './components/layouts/BackToTop';



class App extends Component {
  render() {
    return (      
      <Router>
        <div className="App"> 
          <Loader />
          <Route exact path="/" component={ Landing } />
          <div className="container">
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
          </div>
          <BackToTop />
        </div>
      </Router>      
    );
  };
};

export default App;
