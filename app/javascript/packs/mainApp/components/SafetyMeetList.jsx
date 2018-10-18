import React from 'react';
import { getMinutes } from '../utils/apiclient.js';

export default class SafetyMeetList extends React.Component {
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
        {
          this.state.minutes.length > 0 && this.state.minutes.map((minute) => {
            return (
              <div>
                <p>Date and time: { minute.date_time }</p>
                <p>Location: { minute.location }</p>
                <p>Issues: { minute.issues }</p>
                <br/>
                <hr/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
