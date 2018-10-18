import React from 'react';
import { getMinutes } from '../utils/apiclient.js';

export default class Minutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: [],
      errorMessage: ''
    };
    this.fetchMinutes = this.fetchMinutes.bind(this);
  }

  componentDidMount() {
    this.fetchMinutes();
  }

  fetchMinutes() {
    getMinutes()
      .then(minutes => {
        this.setState({ minutes: minutes })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      });
  }

  render() {
    return (
      <div>
        <br/>
        <div className="block">
          <h1 className="title">Minutes</h1>
          <p className="content">
            Minutes from previous meetings.<br/>
          </p>
        </div>
        <div className="block">
          <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Minutes</th>
            </tr>
            </thead>
            { this.state.minutes.length > 0 && this.state.minutes.map((minute, i) => {
              return (

                <tbody key={ i }>
                <tr>
                  <td>{ minute.date_time }</td>
                  <td>{ minute.location }</td>
                  <td>{ minute.issues }</td>
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
