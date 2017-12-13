import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class ToolCard extends Component {

  static Title = ({children}) => (
    <H3>{ children }</H3>
  )

  render() {
    const { to, children } = this.props
    return (
      <Card to={to}>
        { children }
      </Card>
    )
  }
}


const Card = styled(Link)`
  width: 300px;
  height: 150px;
  border: solid thin black;
  border-radius: 8px;
  padding: 5px;

  &:hover {
    box-shadow: ${props => props.theme.shadow}
  }
`

const H3 = styled.h3`
  text-align: center;
  color: green;
  font-size: 12pt;

  ${Card}:hover & {
    font-size: 12.2pt;
  }
`
