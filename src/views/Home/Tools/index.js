import React from 'react'
import styled from 'styled-components'

import ToolCard from './ToolCard'
import tableauLogo from 'assets/tableau.png'
import azureLogo from 'assets/azure.png'


export default () =>
      <Options>
        <ToolCard to="/dashboard">
          <ToolCard.Title>Tableau Dashboard</ToolCard.Title>
          <ToolCard.Logo src={tableauLogo} />
        </ToolCard>
        <ToolCard to="/machine-learning">
          <ToolCard.Title>Azure Machine Learning</ToolCard.Title>
          <ToolCard.Logo src={azureLogo} />
        </ToolCard>
      </Options>


const Options = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`
