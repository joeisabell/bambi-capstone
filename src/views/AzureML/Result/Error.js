import React from 'react'
import styled from 'styled-components'

export default () => (
  <Title>Well thats akward...</Title>
)

const Title = styled.h3`
  color: ${props => props.theme.secondary}
`
