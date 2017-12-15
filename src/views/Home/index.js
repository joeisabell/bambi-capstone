import React, { Fragment } from 'react'
import styled from 'styled-components'

import PageTitle from 'components/PageTitle'
import Tools from './Tools'
import Team from './Team'


export default () =>
  <Fragment>
    <Section>
      <PageTitle>Business Tools</PageTitle>
      <Tools />
    </Section>

    <Section>
      <PageTitle>Meet the Team</PageTitle>
      <Team />
    </Section>
  </Fragment>

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
