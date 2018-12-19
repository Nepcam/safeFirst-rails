import React from 'react';
import { connect } from 'react-redux';
import { registerUserRequest } from '../actions/register';
import { loginError, setCoverPage } from '../actions/login';
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contact_number: '',
      email: '',
      home_address: '',
      password: '',
      password_confirmation: ''
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setCoverPage());
  }

  updateDetails(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();

    let { password, password_confirmation } = this.state;
    if (password_confirmation !== password) {
      return this.props.dispatch(loginError("Passwords must match!"));
    }

    this.props.dispatch(registerUserRequest({ user: this.state }));
    e.target.reset();
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div className="login-registration registration">
        <form onSubmit={ this.submit }>
          { errorMessage && <p className="help is-danger is-large">{ errorMessage }</p> }
          <div className="field">
            <label className="label" htmlFor="name">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Sam I Am" name="name" onChange={ this.updateDetails }/>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="contact_number">Phone Number</label>
            <div className="control">
              <input className="input" type="text" placeholder="022-555-5555" name="contact_number"
                     onChange={ this.updateDetails }/>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input required className="input" placeholder="test@safefirst.com" type="email" name="email"
                     onChange={ this.updateDetails }/>
              <span className="icon is-small is-left">
              <i className="fas fa-envelope"/>
            </span>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="home_address">Address</label>
            <div className="control">
              <input className="input" type="text" placeholder="1 Test Lane, Wonka World, Chocoland 12345"
                     name="home_address" onChange={ this.updateDetails }/>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <p className="control has-icons-left">
              <input required className="input" placeholder="Password" type="password" name="password"
                     onChange={ this.updateDetails }/>
              <span className="icon is-small is-left">
              <i className="fas fa-lock"/>
            </span>
            </p>
          </div>

          <div className="field">
            <label className="label" htmlFor="password_confirmation">Password Confirmation</label>
            <p className="control has-icons-left">
              <input required className="input" placeholder="Password" type="password" name="password_confirmation"
                     onChange={ this.updateDetails }/>
              <span className="icon is-small is-left">
              <i className="fas fa-lock"/>
            </span>
            </p>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <input className="button is-primary" value='Register' type="submit"/>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <span>Already a member?</span> <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage
  }
};

export default connect(mapStateToProps)(Register);
