import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header--section style--1">        
        <div className="header--topbar bg-black">
          <div className="container">            
            <ul className="header--topbar-links nav ff--primary float--left">
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span>En</span>
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li className="active"><Link to="#">En</Link></li>
                  <li><Link to="#">Bn</Link></li>
                  <li><Link to="#">In</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="header--topbar-social nav float--left hidden-xs">
              <li><Link to="https://facebook.com/followthemoneyng"><i className="fa fa-facebook"></i></Link></li>
              <li><Link to="https://twitter.com/4lowthemoney"><i className="fa fa-twitter"></i></Link></li>
              <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
              <li><Link to="https://www.youtube.com/channel/UCkY8c7LiVNqLCdZ47nL3aBg"><i className="fa fa-youtube"></i></Link></li>
            </ul>            
            <ul className="header--topbar-links nav ff--primary float--right">
              <li>
                <Link to="/Login" className="btn-link">
                  <i className="fa mr--8 fa-user-o"></i>
                  <span>My Account</span>
                </Link>
              </li>
            </ul>            
          </div>
        </div>
        
        <div className="header--navbar navbar bg-black" data-trigger="sticky">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle style--1 collapsed" data-toggle="collapse" data-target="#headerNav">
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>              
              <div className="header--navbar-logo navbar-brand">
                <Link to="index.html">
                  <img src="img/logo-white.png" className="normal" alt="" />
                  <img src="img/logo-black.png" className="sticky" alt="" />
                </Link>
              </div>                  
            </div>
            <div id="headerNav" className="navbar-collapse collapse float--right">                  
              <ul className="header--nav-links style--1 nav ff--primary">
                <li className="dropdown active">
                  <Link to="/"><span>Home</span></Link>
                </li>
                <li className="dropdown">
                  <Link to="/about-us"> <span>About Us</span> </Link>
                </li>
                <li className="dropdown">
                  <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span>Projects</span>
                    <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/campaigns">Campaigns</Link></li>
                    <li><Link to="/on-going">On-Going</Link></li>
                    <li><Link to="/impacts">Impacts</Link></li>
                  </ul>
                </li>                
                <li className="dropdown">
                  <Link to="/support">
                    <span>Support Us</span>                    
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Join Us</span>
                  </Link>
                </li>
                <li><Link to="contact.html"><span>Contact</span></Link></li>
              </ul>               
            </div>
          </div>
        </div>            
      </header>
    )
  }
}
