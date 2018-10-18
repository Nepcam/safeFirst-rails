import React from 'react';
import Header from './Header';
import SafetyMeetList from './SafetyMeetList';

export default class SafetyMeetContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <hr/>
          <SafetyMeetList/>
        </div>
      </div>
    )
  }
}
