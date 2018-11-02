import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  };

  onChange = (ev) => this.setState({[ev.target.name]: ev.target.value});
  
  onSubmit = (ev) => {
    ev.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log('new user: ', newUser);
    // this.props.registerUser(newUser);
    axios.post('/api/users/register', newUser)
      .then((result) => {
        console.log('result: ', result.data);
      }).catch((err) => {
        console.log('error', err.response.data);
        this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    return (
      <div className="register">
        
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up {user ? user.name : null}</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.onChange}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    placeholder="Name" 
                    name="name" 
                  />
                    
                  {
                    errors.name && (
                      <div className="invalid-feedback">
                        { errors.name }
                      </div>
                    ) 
                  }
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.onChange}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address" 
                    name="email" 
                  />
                  {
                    errors.email && (
                      <div className="invalid-feedback">
                        { errors.email }
                      </div>
                    )
                  }
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.onChange}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password" 
                    name="password" 
                  />
                  {
                    errors.password && (
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    )
                  }
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    value={this.state.password2} 
                    onChange={this.onChange}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })}
                    placeholder="Confirm Password" 
                    name="password2" 
                  />
                  {
                    errors.password2 && (
                      <div className="invalid-feedback">
                        {errors.password2}
                      </div>
                    )
                  }
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  auth: state.auth
};

export default connect(mapStateToProps, { registerUser })(Register);