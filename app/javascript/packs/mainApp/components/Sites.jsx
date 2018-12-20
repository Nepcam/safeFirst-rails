import React from 'react';
import SiteForm from './SiteForm';
import PageTitle from './PageTitle';

export default class Sites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title="Sites" />
        <div>
        <SiteForm { ...this.props } />
        </div>
        {/* TODO: table of current sites. */}
      </div>
    )
  }
}