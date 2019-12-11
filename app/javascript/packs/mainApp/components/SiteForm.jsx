import React from 'react';
import { connect } from 'react-redux';
import { createSite } from '../actions/sites';

class SiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.dispatch(createSite({ site: this.state }));
  }

  render() {
    const { isFetching, errorMessage, toggleForm } = this.props;

    return (
      <div>
        <div className="block">
          <h1 className="title">New Site Form</h1>
          <p className="content">
            This form is for the creation of a new work site where potential hazards can be associated with.
          </p>
        </div>
        <form onSubmit={ this.handleSubmit }>
          { errorMessage && <p className="help is-text is-large">{ errorMessage }</p> }
          <div className="field">
            <label className="label" htmlFor="name">Name:</label>
            <input className="input" type="text" name="name" onChange={ this.handleChange }/>
          </div>

          <div className="field">
            <label className="label" htmlFor="location">Location:</label>
            <input className="input" type="text" name="location" onChange={ this.handleChange }/>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" disabled={ isFetching }>Create Site</button>
            </div>
            <div className="control">
              <button onClick={ toggleForm } className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ sites }) => {
  return {
    errorMessage: sites.errorMessage,
    isFetching: sites.isFetching
  }
};

export default connect(mapStateToProps)(SiteForm);
