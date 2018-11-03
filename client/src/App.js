import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import Loader from './components/layouts/Loader';
import BackToTop from './components/layouts/BackToTop';
import Dashboard from './components/dashboard/Dashboard';
import store from './store';


class App extends Component {
  render() {
    return (    
      <Provider store={ store } >
        <Router>
          <div className="App"> 
            <Loader />
            <Route exact path="/" component={ Landing } />
            <div className="container">
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
            <BackToTop />
          </div>
        </Router>
      </Provider>
    );
  };
};

export default App;
