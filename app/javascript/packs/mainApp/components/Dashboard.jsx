import React from 'react';
import HazardsDay from './HazardsDay';
import Statistics from './Statistics';
import PageTitle from './PageTitle';
import HazardsGeneric from './HazardsGeneric';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PageTitle title="Dashboard" />
        <div className="dashboard-container">
          <div className="left">
            <HazardsDay/>
            <HazardsGeneric/>
          </div>
          <div className="right">
            <Statistics/>
          </div>
        </div>
      </div>
    )
  }
}
