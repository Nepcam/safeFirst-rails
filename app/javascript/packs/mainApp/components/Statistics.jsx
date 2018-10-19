import React from 'react';
import ReactChartkick, { PieChart, ColumnChart } from 'react-chartkick';
import Chart from 'chart.js';
import { getIncidents } from '../utils/apiclient';

ReactChartkick.addAdapter(Chart);

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: []
    }
  }

  componentDidMount() {
    getIncidents()
      .then(incidents => {
        this.setState({ incidents: incidents })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      });
  }

  render() {
    const { incidents } = this.state;

    const incidentData = [
      ['Near Miss', incidents.filter(incident => incident.incident_type == "Near miss").length],
      ['Accident', incidents.filter(incident => incident.incident_type == "Accident").length],
      ['Injury', incidents.filter(incident => incident.incident_type == "Injury").length]
    ];

    const taskData = [
      ['Logging', incidents.filter(incident => incident.task == "Logging").length],
      ['Pruning', incidents.filter(incident => incident.task == "Pruning").length],
      ['Planting', incidents.filter(incident => incident.task == "Planting").length]
    ];

    return <div>
      <div className="block">
        <h1 className="title">Statistics</h1>
      </div>
      <br/>
      <div>
        <table>
          <tbody>
          <tr>
            <td className="title has-text-centered is-size-6">Incidents</td>
            <td className="title has-text-centered is-size-6">Incident during Task</td>
          </tr>
          <br/>
          <tr>
            <td><PieChart data={ incidentData } width="350px" height="300px"/></td>
            <td><PieChart data={ taskData } width="350px" height="300px"/></td>
          </tr>
          </tbody>
        </table>
        <br/><br/>
        <table>
          <tbody>
          <tr>
            <td className="title has-text-centered is-size-6">Hazards Logged by Month for 2018<br/><br/></td>
          </tr>
          <tr>
            <td>
              <ColumnChart
                data={ [["January", 20], ["February", 30], ["March", 35], ["April", 29], ["May", 42], ["June", 37], ["July", 49], ["August", 35], ["September", 42], ["October", 5]] }
                width="650px"/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  }
}

export default Statistics;
