import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  };

  onChange = (ev) => this.setState({ [ev.target.name]: ev.target.value });
  
  onSubmit = (ev) => {
    ev.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log('new user: ', user);
    axios.post('/api/users/login', user)
      .then((result) => {
        console.log('result: ', result.data, window.location);
        // let user = localStorage.setItem('user', result.data);
        window.location.replace('/dashboard');
        
      }).catch((err) => {
        console.log('error', err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email" />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password" />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;