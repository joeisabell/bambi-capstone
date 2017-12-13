import React from 'react'

import TableauReport from './TableauReport'

export default () =>
  <div>
    <TableauReport
      url={process.env.REACT_APP_TABLEAU_URL}
      options={{
        hideTabs: true,
        width: "100%",
        height: 600
      }}

      token=""
    />
  </div>
