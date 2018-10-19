import React from 'react';
import { newIncident } from '../utils/apiclient';

const initialState = {
  person_involved: '',
  incident_type: '',
  date_time: '',
  task: '',
  other_task: '',
  incident: '',
  other_incident: '',
  location: '',
  first_aid: '',
};

class IncidentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refreshForm = this.refreshForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const incident = { ...this.state };
    newIncident(incident, (err, res) => {
      this.refreshForm();
    });
  }

  refreshForm() {
    this.setState({
      ...initialState
    });
  }

  render() {
    const {
      person_involved,
      incident_type,
      date_time,
      task,
      other_task,
      incident,
      other_incident,
      location,
      first_aid,
    } = this.state;

    return (
      <div>
        <div className="block">
          <h1 className="title">Incident Form</h1>
          <p className="content">
            Please fill in this form to generate a new incident. <br/>
            A full list of previously generated incidents can be found at the bottom of the page.
          </p>
        </div>
        <div className="block">
          <form onSubmit={ this.handleSubmit }>
            <div className="field">
              <label className="label">Person involved:</label>
              <input className="input" type="text" name="person_involved" value={ person_involved }
                     onChange={ this.handleChange }/>
            </div>
            <div className="control">
              <label className="label">Incident type:</label>
              <div className="select">
                <select name="incident_type" onChange={ this.handleChange }>
                  <option value="" selected={ incident_type == '' }></option>
                  <option>Near miss</option>
                  <option>Injury</option>
                  <option>Accident</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Date:</label>
              <input className="input" type="date" name="date_time" value={ date_time } onChange={ this.handleChange }/>
            </div>
            <div className="field">
              <label className="label">Task:</label>
              <input className="input" type="text" name="task" value={ task } onChange={ this.handleChange }/>
            </div>
            <div className="field">
              <label className="label">Other task:</label>
              <input className="input" type="text" name="other_task" value={ other_task }
                     onChange={ this.handleChange }/>
            </div>
            <div className="field">
              <label className="label">Incident:</label>
              <input className="input" type="text" name="incident" value={ incident } onChange={ this.handleChange }/>
            </div>
            <div className="field">
              <label className="label">Other incident:</label>
              <input className="input" type="text" name="other_incident" value={ other_incident }
                     onChange={ this.handleChange }/>
            </div>
            <div className="field">
              <label className="label">Location:</label>
              <input className="input" type="text" name="location" value={ location } onChange={ this.handleChange }/>
            </div>
            <div className="control">
              <label className="label">First aid:</label>
              <div className="select">
                <select name="first_aid" onChange={ this.handleChange }>
                  <option value="" selected={ first_aid == '' }></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <br/>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-info" type="submit">Submit</button>
              </div>
              <div className="control">
                <button className="button is-danger" type="button" onClick={ this.refreshForm }>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default IncidentForm;
