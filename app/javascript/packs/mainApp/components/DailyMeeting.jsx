import React from 'react';
import HazardForm from './HazardForm';
import PageTitle from './PageTitle';

export default class DailyMeeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title="Daily Meeting" />
        <div>
          <HazardForm { ...this.props } />
        </div>
      </div>
    )
  }
}
