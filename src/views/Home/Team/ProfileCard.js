import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class ToolCard extends Component {

  static Name = styled.h3`
    text-align: center;
    color: black;
    font-size: 20pt;
    font-family: ${props => props.theme.secondaryFont};
  `

  static Pic = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    transition: box-shadow .5s, width .5s, height .5s;

    &:hover {
      box-shadow: ${props => props.theme.shadow};
      width: 225px;
      height: 225px;
    }
  `

  static Social = styled(Link)`

  `

  render() {
    const { href, children } = this.props
    return (
      <Card target='_blank' href={href}>
        { children }
      </Card>
    )
  }
}

const Card = styled.a`
  width: 250px;
  height: 263px;
  margin-bottom: 35px;
  background: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
`
