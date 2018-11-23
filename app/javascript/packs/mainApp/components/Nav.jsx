import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/logout'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: false
    };

    this.closeBurger = this.closeBurger.bind(this);
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  closeBurger() {
    if (this.state.showBurger) {
      this.setState({
        showBurger: false
      });
    }
  }

  toggleBurger() {
    this.setState({
      showBurger: !this.state.showBurger
    });
  }

  render() {
    const { isAuthenticated, userName, logout } = this.props;
    const { showBurger } = this.state;

    return (
      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <span>safeFirst</span>
          </a>

          <a role="button" className={ `navbar-burger burger ${showBurger ? 'is-active' : ''}` } aria-label="menu"
             aria-expanded="false"
             data-target="sf-navbar" onClick={ this.toggleBurger }>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="sf-navbar" className={ `navbar-menu ${showBurger ? 'is-active' : ''}` }>
          <div className="navbar-start">
            { isAuthenticated ? [
              <Link onClick={ this.closeBurger } to="/dailymeeting" key="dailymeeting" className="navbar-item">
                Daily Meeting
              </Link>,
              <Link onClick={ this.closeBurger } to="/hsmeeting" key="hsmeeting" className="navbar-item">
                H&S Meeting
              </Link>,
              <Link onClick={ this.closeBurger } to="/incidents" key="incidents" className="navbar-item">
                Incidents
              </Link>
            ] : '' }
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              { isAuthenticated ?
                <div className="buttons">
                  { userName && <p className="navbar-item">Hello, { userName }</p> }
                  <button className="button is-dark" onClick={ logout }>
                    Log Out
                  </button>
                </div> :
                <div className="buttons">
                  <Link onClick={ this.closeBurger } to="/register" key="register" className="button is-primary">
                    Register
                  </Link>
                  <Link onClick={ this.closeBurger } to="/login" key="login" className="button is-dark">
                    Log In
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    userName: auth.userName
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
