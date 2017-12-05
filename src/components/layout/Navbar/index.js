import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import SVG from 'components/SVG'
import menu from 'assets/menu.svg'
import chevronLeft from 'assets/chevron-left.svg'

import Menu from './Menu'
import MobileMenu from './MobileMenu'

const logo =
  'https://s3-us-west-2.amazonaws.com/bambi-data/bambi.png'

class Navbar extends Component {
  state = {
    displayMenu: false
  }

  toggleDisplay = () => {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  render() {
    return (
      <Fragment>
        <Nav>
          <BackButton path={chevronLeft} onClick={this.props.history.goBack} />
          <Logo src={logo} alt="KnifeTrend Logo" />
          <Menu toggleDisplay={this.toggleDisplay} />
          <MobileMenuButton path={menu} onClick={this.toggleDisplay} />
        </Nav>
        {this.state.displayMenu ? (
          <MobileMenu toggleDisplay={this.toggleDisplay} />
        ) : null}
      </Fragment>
    )
  }
}

export default withRouter(Navbar)

const Nav = styled.nav`
  background: ${props => props.theme.primary};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  border-bottom: solid thick ${props => props.theme.secondary};

  @media (min-width: ${props => props.theme.tablet}px) {
    height: 70px;
  }

  @media (min-width: ${props => props.theme.desktop}px) {
    padding: 0 100px;
    height: 70px;
  }
`
const Logo = styled.img`
  height: 40px;
  padding: 0 20px;
`
const BackButton = styled(SVG)`
  stroke: ${props => props.theme.secondary};
  margin-left: 5px;

  @media (min-width: ${props => props.theme.tablet}px) {
    display: none;
  }
`
const MobileMenuButton = styled(SVG)`
  width: 30px;
  height: 40px;
  stroke: ${props => props.theme.secondary};
  margin-right: 5px;

  @media (min-width: ${props => props.theme.tablet}px) {
    display: none;
  }
`
