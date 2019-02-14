import React from 'react';
import connect from "react-redux/es/connect/connect";
import SiteForm from './SiteForm';
import PageTitle from './PageTitle';
import { fetchSites } from '../actions/sites';

class Sites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchSites());
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  renderSites() {
    const { sites } = this.props;


    return sites.map((site, index) => {
      return Sites.renderSite(site, index)
    });
  }

  static renderSite(site, index) {
    return <div className="column is-one-quarter" key={ index }>
      <article className="tile is-child box">
        <p className="title">{ site.name }</p>
        <p className="subtitle">
          <span className="icon is-large">
            <i className="fas fa-map-marker-alt has-text-primary"/>
          </span>
          { site.location }
        </p>
        <button className="button is-dark">Set as Current</button>
      </article>
    </div>
  }

  render() {
    return (
      <div>
        <PageTitle title="Sites"/>
        <div className="columns">
          <div className="column is-full">
            { this.state.showForm ? <SiteForm toggleForm={ this.toggleForm }/> :
              <button onClick={ this.toggleForm } className="tile is-child notification box is-primary">
              <span className="icon is-large">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x"/>
                    <i className="fas fa-plus fa-stack-1x fa-inverse has-text-primary"/>
                  </span>
                </span>
                <span className="title">New Site</span>
              </button>
            }
          </div>
        </div>
        <div className="columns is-multiline">
          { this.renderSites() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ sites }) => {
  return {
    sites: sites.sites,
    isFetching: sites.isFetching,
    errorMessage: sites.errorMessage
  }
};

export default connect(mapStateToProps)(Sites);
