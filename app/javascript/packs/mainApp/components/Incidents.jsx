import React from 'react';
import Header from './Header';
import IncidentForm from './IncidentForm';
import IncidentList from './IncidentList';
import IncidentHeader from './IncidentHeader';

export default class Incidents extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* <div>
          <Header/>
        </div> */}
        <div>
          <IncidentHeader/>
        </div>
        <div>
          <IncidentForm/>
          <hr/>
          <IncidentList/>
        </div>
      </div>
    )
  }
}
