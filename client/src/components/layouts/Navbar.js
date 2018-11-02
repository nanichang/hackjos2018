import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Follow The Money</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {' '}
                <Link className="nav-link" to="/profiles"> Follow The Money</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">PROJECT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">SUPPORT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">JOIN US</Link>
              </li>
              <li>
                <Link className="nav-item" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>    
    );
  };
};

export default Navbar;