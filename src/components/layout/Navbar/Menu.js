import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Login from './Login'

const Menu = props => (
  <MenuContainer>
    <MenuList>
      <MenuLink exact={true} to="/">
        Home
      </MenuLink>
      <MenuLink to="/dashboard">Dashboard</MenuLink>
      <MenuLink to="/machine-learning">Azure ML</MenuLink>
    </MenuList>
    <Login />
  </MenuContainer>
)

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const MenuContainer = MenuList.extend`
  width: 100%;
  display: none;

  @media (min-width: ${props => props.theme.tablet}px) {
    display: flex;
  }
`
const MenuLink = styled(NavLink).attrs({
  activeClassName: 'navLinkActive'
})`
  text-align: center;
  padding: 0 15px;
  font-family: ${props => props.theme.primaryFont};
  color: #333333bf;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 1.2pt;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.navLinkActive {
    color: ${props => props.theme.secondary};
  }

  &:hover {
    background: ${props => props.theme.secondary};
    color: white;
  }
`

export default Menu
