import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class ToolCard extends Component {

  static Title = styled.h3`
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-size: 15pt;

    ${Card}:hover & {
      font-size: 15.1pt;
    }
  `

  static Logo = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px;
  `

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
  border: solid 2px #0069ff;
  border-radius: 1px;
  padding: 10px;
  background: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 5px;
  transition: box-shadow .5s;

  &:hover {
    box-shadow: ${props => props.theme.shadow}
  }
`
