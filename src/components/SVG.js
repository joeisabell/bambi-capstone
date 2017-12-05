import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

const SVG = ({ onClick, ...otherProps }) => (
  <ReactSVG
    callback={svg => svg.addEventListener('click', onClick)}
    {...otherProps}
  />
)

export default styled(SVG)`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #606060;
  cursor: ${props => (props.onClick ? 'pointer' : 'initial')};
`
