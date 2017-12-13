import React from 'react'
import styled from 'styled-components'

import ToolCard from './ToolCard'

export default () =>
  <div>
    <Section>
      <Heading>Business Tools <Bar /></Heading>
      <Options>
        <ToolCard to="/dashboard">
          <ToolCard.Title>Tableau Dashboard</ToolCard.Title>
        </ToolCard>
        <ToolCard to="/machine-learning" />
      </Options>
    </Section>

    {/* <Section>
      <Heading>Meet the Team <Bar /></Heading>
    </Section> */}
  </div>

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.secondaryFont};
  font-size: 30pt;
  align-items: center;
`

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;
`

const Bar = styled.span`
  width: 70%;
  height: 5px;
  background: ${props => props.theme.secondary};
  margin: 20px 0;
`
