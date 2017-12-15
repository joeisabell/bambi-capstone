import React from 'react'
import styled from 'styled-components'

const PageTitle = ({ children }) =>
  <Section>
    <Heading>
      { children}
      <Bar />
    </Heading>
  </Section>

PageTitle.Sub = styled.div`
  color: #333333bf;
  font-size: 16pt;
  font-weight: 300;
  margin-bottom: 40px;
  line-height: 20pt;
  padding: 0 100px;
  text-align: center;

  @media (max-width: 550px) {
    padding: 0 20px;
  }
`

PageTitle.Bold = styled.span`
  font-weight: 600;
  color: ${props => props.theme.secondary}
`

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

const Bar = styled.span`
  width: 70%;
  height: 5px;
  background: ${props => props.theme.secondary};
  margin: 20px 0;
`

export default PageTitle
