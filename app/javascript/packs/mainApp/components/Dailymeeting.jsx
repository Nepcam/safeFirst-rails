import React from 'react';
import Header from './Header';
import HazardForm from './HazardForm';
import DailymeetingHeader from './DailymeetingHeader';

export default class Dailymeeting extends React.Component {
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
          <DailymeetingHeader/>
        </div>
        <div>
          <HazardForm { ...this.props } />
        </div>
      </div>
    )
  }
}
