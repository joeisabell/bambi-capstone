import React, { Fragment } from 'react'
import styled from 'styled-components'

export default ({ store, items }) => (
  <Fragment>
    <Label>Store:</Label>
     <Store>{ store }</Store>
    <Label>Items:</Label>
    <ul>
      {items.map((item, i) => (
        <Item key={i}>{ item['Item Desc 1'] }</Item>
      ))}
    </ul>
  </Fragment>
)

const Label = styled.h2`
  font-size: 16pt;
  color: ${props => props.theme.secondary};
  margin: 4px;
  font-weight: 700;
`

const Item = styled.li`
  font-size: 14pt;
  padding-left: 16px;
  margin: 4px;
  font-weight: 700;
`
const Store = Item.withComponent('div')
