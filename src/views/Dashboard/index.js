import React, { Component, Fragment } from 'react'

import ErrorBoundary from 'components/ErrorBoundary'
import PageTitle from 'components/PageTitle'
import Filters from './Filters'
import TableauReport from './TableauReport/TableauReport.js'


export default class Dashboard extends Component {

  state = {
    "Dept Category Description": "",
    "Fineline Description": ""
  }

  setFilters = filters => this.setState(filters)

  render() {
    const Bold = PageTitle.Bold
    const Subtitle = PageTitle.Sub
    return (
      <Fragment>
        <PageTitle>
          Tableau Embedded Dashboard
        </PageTitle>
        <Subtitle>
          Analyze your business without a data science degree!
          Filter the data based on <Bold>Dept Category Description</Bold> or
          <Bold> Fineline Description</Bold>
        </Subtitle>
        <Filters
          filterState={this.state}
          onChange={this.setFilters}
        />
        <ErrorBoundary>
          <TableauReport
            url={process.env.REACT_APP_TABLEAU_URL}
            options={{
              hideTabs: true,
              width: "100%",
              height: 600
            }}
            filters={this.state}
          />
      </ErrorBoundary>
      </Fragment>
    )
  }
}
