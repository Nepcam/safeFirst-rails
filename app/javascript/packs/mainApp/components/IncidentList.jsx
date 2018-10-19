import React from 'react';
import { getIncidents } from '../utils/apiclient.js';

export default class IncidentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
      errorMessage: ''
    };

    this.fetchIncidents = this.fetchIncidents.bind(this);
  }

  componentDidMount() {
    this.fetchIncidents();
  }

  fetchIncidents() {
    getIncidents()
      .then(incidents => {
        this.setState({ incidents: incidents })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      });
  }

  render() {
    return (
      <div>
        <div className="block">
          <h1 className="title">List of Incidents</h1>
          <p className="content">
            The following incidents have taken place.<br/>
          </p>
        </div>
        <div className="block">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>Person Involved</th>
              <th>Incident Type</th>
              <th>Date and Time</th>
              <th>Task</th>
              <th>Other task</th>
              <th>Incident</th>
              <th>Other incident</th>
              <th>Location</th>
              <th>First aid</th>
            </tr>
            </thead>
            { this.state.incidents.length > 0 && this.state.incidents.map((incident, i) => {
              return (

                <tbody key={ i }>
                <tr>
                  <td>{ incident.person_involved }</td>
                  <td>{ incident.incident_type }</td>
                  <td>{ incident.date_time }</td>
                  <td>{ incident.task }</td>
                  <td>{ incident.other_task }</td>
                  <td>{ incident.incident }</td>
                  <td>{ incident.other_incident }</td>
                  <td>{ incident.location }</td>
                  <td>{ incident.first_aid }</td>
                </tr>
                </tbody>

              )
            })
            }
          </table>
        </div>
      </div>
    )
  }
}
