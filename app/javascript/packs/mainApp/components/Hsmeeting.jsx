import React from 'react';
import Header from './Header';
import SafetyMeet from './SafetyMeet';
import HazardIn from './HazardIn';
import HSmeetingHeader from './HsmeetingHeader';
import Minutes from './Minutes';

export default class Hsmeeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <div>
          <Header/>
        </div> */}
        <div>
          <HSmeetingHeader/>
        </div>
        <div className="dashboard-container">
          <div className="left">
            <SafetyMeet/>
          </div>
          <div className="right">
            <HazardIn { ...this.props }/>
          </div>
        </div>
        <div>
          <Minutes/>
        </div>
      </div>
    )
  }
}
