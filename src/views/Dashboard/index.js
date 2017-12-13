import React, { Component } from 'react'
import TableauReport from 'react-tableau-report'

import styled from 'styled-components'

export default class Dashboard extends Component {

  state = {
    filters: {}
  }

  onClick = e => {
    console.log('setting filters')
    this.setState({
      filters: {
        "Fineline Description": "<= 6000 MAH"
      }
    })
  }

  render() {
    const { filters } = this.state
    console.log(filters)
    return (
      <div>
        <Filter
          onClick={ this.onClick }
        > Fineline Filter </Filter>
        <TableauReport
          url={process.env.REACT_APP_TABLEAU_URL}
          options={{
            hideTabs: true,
            width: "100%",
            height: 600
          }}
          filters={filters}
        />
      </div>
    )
  }
}


const Filter = styled.button`
  background: green;
`
