import React from 'react';
import { newMinutes } from '../utils/apiclient';

const initialState = {
  date_time: '',
  location: '',
  issues: '',
};

class SafetyMeet extends React.Component {
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
    const hazard = { ...this.state };
    newMinutes(hazard, (err, res) => {
      this.refreshForm()
    });
  }

  refreshForm() {
    this.setState({
      ...initialState
    });
  }

  render() {
    const {
      date_time,
      location,
      issues,
    } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="block">
          <h1 className="title">H&S Meeting Minutes</h1>
          <p className="content">
            Enter the notes of your periodic Health and Safety Meeting in the below form.<br/>
          </p>
        </div>
        <div>
          <div>
            <label className="label">Date:</label>
            <input className="input" type="date" name="date_time" value={ date_time } onChange={ this.handleChange }/>
          </div>
          <div>
            <label className="label">Location:</label>
            <input className="input" type="text" name="location" value={ location } onChange={ this.handleChange }/>
          </div>
          <div>
            <label className="label">Minutes:</label>
            <div className="control">
              <textarea className="textarea" type="text" name="issues" value={ issues }
                        placeholder="Attendees, Health & Safety concerns, training needs, incidents/accident trends, personal concerns "
                        rows="10" onChange={ this.handleChange }/>
            </div>
          </div>
          <br/>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-info">Submit</button>
            </div>
            <div className="control">
              <button className="button is-danger">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SafetyMeet;
