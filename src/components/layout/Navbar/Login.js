import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import SVG from 'components/SVG'

import profile from 'assets/profile.svg'

const Login = ({ location }) =>
      <MenuList>
        <MenuLink
          to={{
            pathname: '/',
            state: { from: location }
          }}
        >
          <ProfileIcon path={profile} />
          Login
        </MenuLink>
        <MenuLink to="/">Sign Up</MenuLink>
      </MenuList>

export default withRouter(Login)

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
    background: ${props => props.theme.secondary} ;
    color: white;
  }
`

const ProfileIcon = styled(SVG)`
  border: solid white thin;
  border-radius: 30px;
  margin: 5px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background: white;

  & > path,
  circle {
    stroke: ${props => props.theme.secondary};
    fill: ${props => props.theme.secondary};
  }
`
