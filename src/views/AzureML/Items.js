import React from 'react'
import styled from 'styled-components'

export default ({ items=[], store }) => (
  <Container>
    <Title>Results</Title>
    <h2>{ store }</h2>
    <div>
      {items.map((item, i) => (
        <div key={i}>{ item['Item Desc 1'] }</div>
      ))}
    </div>
  </Container>
)



const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  color: ${props => props.theme.secondary}
`
