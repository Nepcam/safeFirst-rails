import React from 'react';
import { connect } from 'react-redux';
import { registerUserRequest } from '../actions/register';
import { loginError } from '../actions/login';

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
      <form className="register-form" onSubmit={ this.submit }>
        <h1 className="title is-2">Register</h1>
        <hr/>
        { errorMessage && <span className="has-text-danger is-large">{ errorMessage }</span> }
        <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Name
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Sam I Am" type="text"
                 name="name" onChange={ this.updateDetails }/>
        </label>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Phone Number
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="022-555-5555"
                   type="text" name="contact_number" onChange={ this.updateDetails }/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Email Address
            <input required className="input is-large has-text-centered is-fullwidth"
                   placeholder="example@safefirst.com"
                   type="text" name="email" onChange={ this.updateDetails }/>
          </label>
        </div>
        <br/>
        <div className="columns">
          <label className="column is-12 label is-large has-text-centered">Address
            <input required className="input is-large has-text-centered is-fullwidth"
                   placeholder="1 Test Lane, Wonka World"
                   type="text" name="home_address" onChange={ this.updateDetails }/>
          </label>
        </div>
        <br/>
        <div className="columns">
          <label className="column is-6 label is-large has-text-centered">Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="!am$ecure"
                   type="password" name="password" onChange={ this.updateDetails }/>
          </label>
          <label className="column is-6 label is-large has-text-centered">Confirm Password
            <input required className="input is-large has-text-centered is-fullwidth" placeholder="!am$ecure"
                   type="password" name="password_confirmation" onChange={ this.updateDetails }/>
          </label>
        </div>
        <input className="button is-success is-large is-fullwidth" value="Register" type="submit"/>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage
  }
};

export default connect(mapStateToProps)(Register);
