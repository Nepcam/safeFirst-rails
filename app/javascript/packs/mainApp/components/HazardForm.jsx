import React from 'react';
//import {connect} from 'react-redux';
import { newHazard } from '../utils/apiclient';

class HazardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hazard: '',
      risk: '',
      control: '',
      daily: 'true'

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.refreshForm = this.refreshForm.bind(this);
  }

  onSubmit(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    newHazard(this.state, () => {
      this.props.history.push('/dashboard')
    });
  }

  refreshForm() {
    this.setState({});
    this.render();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="block">
          <h1 className="title">Hazard Form</h1>
          <p className="content">
            Please fill in this form to generate a new hazard that applies to todays work. <br/>
            All submitted hazards will be visible on the dashboard.
          </p>
        </div>
        <div>
          <div className="field">
            <label className="label">Hazard Category:</label>
            <div className="select is-fullwidth">
              <select name="hazard_category" onChange={ this.onSubmit }>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Hazard Description:</label>
            <input className="input" type="text" name="name" onChange={ this.onSubmit }/>
          </div>
          <div className="field">
            <label className="label">Risk Rating:</label>
            <input className="input" type="text" name="risk" onChange={ this.onSubmit }/>
          </div>
          <div className="field">
            <label className="label">Control Category:</label>
            <div className="select is-fullwidth">
              <select name="hazard_control_category" onChange={ this.onSubmit }>
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="field">
            <label className="label">Means of Control:</label>
            <input className="input" type="text" name="control" onChange={ this.onSubmit }/>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Add Hazard to Dashboard</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default HazardForm;
