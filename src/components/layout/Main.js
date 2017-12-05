import styled from 'styled-components'

export default styled.main`
  flex-grow: 1;
  margin: 15px;


  @media (min-width: ${props => props.theme.desktop}px) {
    padding: 0 100px;
  }
`
