import React from 'react';
import SafetyMeetList from './SafetyMeetList';

export default class SafetyMeetContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <hr/>
        <SafetyMeetList/>
      </div>
    )
  }
}
