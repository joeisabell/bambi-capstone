import React from 'react'
import styled from 'styled-components'

import SVG from 'components/SVG'
import loading from 'assets/loading-bars.svg'

export default props => (
  <Div>
    <LoadingBars path={loading} />
  </Div>
)

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
const LoadingBars = styled(SVG)`
  width: 80px;
  height: 80px;

  & path {
    fill: #606060;
    stroke: #606060;
  }
`
