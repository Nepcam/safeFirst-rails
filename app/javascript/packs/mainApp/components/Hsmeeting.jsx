import React from 'react';
import SafetyMeet from './SafetyMeet';
import HazardIn from './HazardIn';
import PageTitle from './PageTitle';
import Minutes from './Minutes';

export default class Hsmeeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title="Health and Safety Meeting" />
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
