import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import SVG from 'components/SVG'

import exitIcon from 'assets/exit.svg'

const MobileMenu = ({ toggleDisplay }) => (
  <MenuContainer>
    <Exit path={exitIcon} onClick={toggleDisplay} />
    <MenuList onClick={toggleDisplay}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/machine-learning">Azure ML</NavLink>
    </MenuList>
  </MenuContainer>
)

MobileMenu.propTypes = {
  toggleDisplay: PropTypes.func.isRequired,
  viewer: PropTypes.object
}

export default MobileMenu

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const MenuContainer = styled.div`
  background: ${props => props.theme.secondary};
  color: #fff;
  padding: 13px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 1000;
  animation: 0.5s ${fadeIn} ease-in-out;
`

const Exit = styled(SVG)`
  text-align: right;
  stroke: white;
  width: 38px;
  height: 38px;
  float: right;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  clear: both;
`
const NavLink = styled(Link)`
  text-align: center;
  width: 80%;
  padding: 20px;
  border-top-style: solid;
  border-width: thin;
  border-color: white;
  font-family: ${props => props.theme.primaryFont};
  color: white;
  font-size: 20px;
  text-transform: uppercase;

  &:first-of-type {
    border-top: none;
  }
`
