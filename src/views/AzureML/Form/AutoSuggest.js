import React from 'react'
import ReactAutoSuggest from 'react-autosuggest';

export default class AutoSuggest extends React.Component {
  state = {
      suggestions: []
  }

  onChange = (e, { newValue, method}) => {
    const { name } = this.props
    this.props.onChange(name, newValue)
  }

  getSuggestions = value => {
    const { data } = this.props
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : data.filter(
      item => item.name.toLowerCase().includes(inputValue)
    )
  }

  getSuggestionValue = suggestion => suggestion.name

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] })
  }

  renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  )

  render() {
    const { suggestions } = this.state
    const { data, ...inputProps } = this.props

    inputProps.onChange = this.onChange

    return (
      <ReactAutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}
