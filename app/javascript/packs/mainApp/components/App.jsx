import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Incidents from './Incidents';
import Hsmeeting from './Hsmeeting';
import DailyMeeting from './DailyMeeting';
import Nav from './Nav';
import SafetyMeetContainer from './SafetyMeetContainer';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // When logged in, show the following components: Header & Dashboard
  static authenticatedComponent() {
    return (
      <div>
        <Route exact path="/" component={ Dashboard }/>
        <Route path="/incidents" component={ Incidents }/>
        <Route path="/hsmeeting" component={ Hsmeeting }/>
        <Route path="/hsmeetinglist" component={ SafetyMeetContainer }/>
        <Route path="/dailymeeting" component={ DailyMeeting }/>
      </div>
    )
  }

  // When NOT logged in, show the following components: Nav & Landing
  static nonauthenticatedComponent() {
    return (
      <div>
        <Route exact path="/" component={ Landing }/>
        <Route path="/login" component={ Login }/>
        <Route path="/register" component={ Register }/>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Route path="/" component={ Nav }/>
            { this.props.auth.isAuthenticated ? App.authenticatedComponent() : App.nonauthenticatedComponent() }
          </div>
        </div>
      </Router>
    )
  }
}

// Authentication not currently working
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);
