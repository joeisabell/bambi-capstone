import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import SVG from 'components/SVG'

import book from 'assets/book.svg'
import github from 'assets/github.svg'

const docsLink = 'https://docs.google.com/document/d/145MMpIZFPykiwyYv-hJVwQb8UZKtPo9ketoEspEkcRc/edit?usp=sharing'

const Login = ({ location }) =>
      <MenuList>
        <MenuLink target="_blank" href={docsLink}>
          Docs
          <Icon path={book} />
        </MenuLink>
        <MenuLink target="_blank" href="https://github.com/joeisabell/machine-learning">
          GitHub
          <Icon path={github} />
        </MenuLink>
      </MenuList>

export default withRouter(Login)

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const MenuLink = styled.a.attrs({
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
    ${'' /* color: ${props => props.theme.secondary}; */}
  }

  &:hover {
    background: ${props => props.theme.secondary} ;
    color: white;
  }
`

const Icon = styled(SVG)`
  margin: 5px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  background: white;
  cursor: pointer;

  & > path,
  circle {
    stroke: ${props => props.theme.secondary};
  }

  ${MenuLink}:hover & {
    background: ${props => props.theme.secondary};

    & > path,
    circle {
      stroke: white;
    }
  }

`
