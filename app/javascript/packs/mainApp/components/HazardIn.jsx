import React from 'react';
//import {connect} from 'react-redux';
import { newHazard } from '../utils/apiclient';

class HazardIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hazard: '',
      risk: '',
      control: '',
      daily: 'false'
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
      <div>
        <div className="block">
          <h1 className="title">Hazard Form</h1>
          <p className="content">
            Please fill in this form to generate a generic hazard. A generic hazard is a hazard that applies long
            term. <br/>
            All submitted hazards will be visible on the dashboard.
          </p>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <label className="label">
            Hazard:
            <input className="input" type="text" name="hazard" onChange={ this.onSubmit }/>
          </label>
          <br/>
          <label className="label">
            Risk:
            <input className="input" type="text" name="risk" onChange={ this.onSubmit }/>
          </label>
          <br/>
          <label className="label">
            Control:
            <input className="input" type="text" name="control" onChange={ this.onSubmit }/>
          </label>
          <br/>
          <div className="control">
            <button className="button is-primary">Add Hazard to Dashboard</button>
          </div>
        </form>
      </div>
    )
  }
}

export default HazardIn;
