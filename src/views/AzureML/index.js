import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'
import Items from './Items'


const AzureContainer = styled.div`
  display: flex;
  width: 100%;
`

export default class AzureML extends Component  {
  state = {
    items: [],
    loading: false
  }

  setItems = items => {
    console.log(items)
    this.setState({ items })
  }

  render() {
    const { items } = this.state
    return (
      <AzureContainer>
        <Form setItems={this.setItems} />
        <Items items={items}/>
      </AzureContainer>
    )
  }
}
