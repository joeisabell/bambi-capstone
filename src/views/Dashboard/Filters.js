import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Filters extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    filterState: PropTypes.object
  }

  static defaultProps = {
    onChange: () => {},
    filterState: {
      "Dept Category Description": "",
      "Fineline Description": ""
    }
  }

  static finelines = [
     "All Finelines"
    , "<= 6000 MAH"
    , "30P CABLE"
    , "AUX CABLE"
    , "CASSETTE ADAPTER/FM TRANSM"
    , "GALAXY S4"
    , "IPHONE 4/4S"
    , "IPhone 5/5s"
    , "IPHONE 5C"
    , "Iphone Screen Care"
    , "MICRO CABLE"
    , "MICRO CAR KIT"
    , "MISCELLANEOUS"
    , "UNIV CAR ADAPTER"
  ]

  static categories = [
     "All Categories"
    , "CASES"
    , "MISC ACCESSORIES"
    , "POWER AND CONNECTIVITY"
  ]

  onClick = e => {
    this.props.onChange({
      "Dept Category Description": "",
      "Fineline Description": ""
    })
  }

  onChange = e => {
    const { name, value } = e.target
    if(value.includes('All')) {
      this.props.onChange({ [name]: "" })
    } else {
      this.props.onChange({ [name]: value })
    }
  }

  render() {
    const { filterState } = this.props
    return (
      <Container>
        <Heading>Filters</Heading>
        <FilterSection>
          <Select
            name="Dept Category Description"
            onChange={this.onChange}
            value={filterState["Dept Category Description"] || "All Categories"}
          >
            {Filters.categories.map(( c, i ) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </Select>
          <Select
            name="Fineline Description"
            onChange={this.onChange}
            value={filterState["Fineline Description"] || "All Finelines"}
          >
            {Filters.finelines.map(( f, i ) => (
              <option key={i} value={f}>{f}</option>
            ))}
          </Select>
          <Button
            onClick={this.onClick}
            disabled={ !(
                filterState["Fineline Description"] ||
                filterState["Dept Category Description"]
            )}
          >
            Clear Filters
          </Button>
        </FilterSection>
      </Container>
    )
  }
}


const Container = styled.section`
  padding: 5px;
`
const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 565px) {
    flex-direction: column;
  }
`
const Heading = styled.h3`
  font-size: 16pt;
  color: ${props => props.theme.secondary};
  letter-spacing: 1pt;
  margin: 5px;
  text-align: right;

  @media (max-width: 565px) {
    text-align: center;
  }
`
const Select = styled.select`
  margin: 5px;
  padding: 5px;
  font-size: 11pt;
  width: 200px;
  height: 30px;
  cursor: pointer;
  background: white;
`
const Button = styled.button`
  font-size: 11pt;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    cursor: not-allowed;
  }
`
