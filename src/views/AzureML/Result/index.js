import React from 'react'
import styled from 'styled-components'

import azure from 'assets/azure_faded.png'
import Loading from 'components/Loading'
import Error from './Error'
import Items from './Items'

export default ({ result: { store, items }, loading, error }) => {
  return (
    <Container>
      <Header>Output</Header>
      { loading && <Loading /> }
      { error && <Error /> }
      { items && <Items {...{store, items}} /> }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${azure});
  background-color: white;
  background-size: 50% auto;
  background-position-x: center;
  background-position-y: 45px;
  background-repeat:no-repeat;
  width: 300px;
  min-height: 300px;
`
const Header = styled.h3`
  font-family: ${props => props.theme.secondaryFont};
  color: ${props => props.theme.secondary};
  font-size: 26pt;
  text-align: center;
`
