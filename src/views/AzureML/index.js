import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import PageTitle from 'components/PageTitle'
import Form from './Form'
import Result from './Result'

export default class AzureML extends Component  {
  state = {
    result: {},
    loading: false,
    error: false
  }

  onComplete = ({ result, loading, error }) => {
    this.setState({ result, loading, error })
  }

  onSubmit = ({ loading }) => this.setState({ loading })

  render() {
    const { result, error, loading } = this.state
    const Bold = PageTitle.Bold
    const Subtitle = PageTitle.Sub
    return (
      <Fragment>
        <PageTitle>
          Azure Machine Learning
        </PageTitle>
        <Subtitle>
          Use our intelligent machine learning model to determine which Items
          should be sold together based on <Bold>sales quantity</Bold>,
          <Bold> location</Bold>, and <Bold>item description</Bold>.
        </Subtitle>
        <Container>
          <Form
            onSubmit={this.onSubmit}
            onComplete={this.onComplete}
          />
          <Result
            result={result}
            error={error}
            loading={loading}
          />
        </Container>
      </Fragment>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`
