import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, setCoverPage } from '../actions/login';

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
    this.props.dispatch(loginUser({ user: this.state }));
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div className="login-registration">
        <form onSubmit={ this.submit }>
          { errorMessage && <p className="help is-danger is-large">{ errorMessage }</p> }
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input required className="input" placeholder="test@safefirst.com" type="text" name="email"
                     onChange={ this.updateDetails }/>
              <span className="icon is-small is-left">
              <i className="fas fa-envelope"/>
            </span>
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

          <div className="field is-grouped">
            <div className="control">
              <input className="button is-primary" value='Login' type="submit"/>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <span>Not a member yet?</span> <Link to="/register">Register</Link>
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

export default connect(mapStateToProps)(Login);
