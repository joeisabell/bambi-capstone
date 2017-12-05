import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar, Footer, Main } from 'components/layout'
import AzureML from './AzureML'
import Dashboard from './Dashboard'
import Home from './Home'


export default props => (
  <div>
    <Navbar />
    <Main>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/machine-learning" component={ AzureML } />
      </Switch>
    </Main>
    <Footer />
  </div>
)
