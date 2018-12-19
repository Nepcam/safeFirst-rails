import React from 'react';
import IncidentForm from './IncidentForm';
import IncidentList from './IncidentList';
import PageTitle from './PageTitle';

export default class Incidents extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PageTitle title="Incidents" />
        <div>
          <IncidentForm/>
          <hr/>
          <IncidentList/>
        </div>
      </div>
    )
  }
}
