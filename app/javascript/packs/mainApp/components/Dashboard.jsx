import React from 'react';
// import Header from './Header';
import HazardsDay from './HazardsDay';
import Statistics from './Statistics';
import DashboardHeader from './DashboardHeader';
import HazardsGeneric from './HazardsGeneric';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {/* <div>
          <Header/>
        </div> */}
        <div>
          <DashboardHeader/>
        </div>
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
