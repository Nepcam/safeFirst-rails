import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.dispatch(loginUser({ user: this.state }));
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <form className="form box" onSubmit={ this.submit }>
        <h1 className="title is-2">Log In</h1>
        <hr/>
        { errorMessage && <span className="has-text-danger is-large">{ errorMessage }</span> }
        <label className="label is-large has-text-centered">Email
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="test@safefirst.com" type="text"
                 name="email" onChange={ this.updateDetails }/>
        </label>
        <label className="label is-large has-text-centered">Password
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="Password"
                 type="password" name="password" onChange={ this.updateDetails }/>
        </label>
        <input className="button is-large is-fullwidth is-success" value='Login' type="submit"/>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage
  }
};

export default connect(mapStateToProps)(Login);
