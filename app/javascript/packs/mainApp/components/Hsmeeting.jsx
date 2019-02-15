import React from 'react';
import SafetyMeet from './SafetyMeet';
import HazardIn from './HazardIn';
import HazardForm from './HazardForm';
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
        <div className="columns">
          <div className="column">
            <SafetyMeet/>
          </div>
          <div className="column">
            <HazardForm { ...this.props } />
          </div>
        </div>
        <div>
          <Minutes/>
        </div>
      </div>
    )
  }
}
