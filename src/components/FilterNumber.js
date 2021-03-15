import React from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

class FilterNumberClass extends React.Component {
  constructor(props) {
    super()

    this.state = {
      number: queryString.parse(props.location.search)[props.param] || ``
    }
  }

  handleChange(e) {
    const { param } = this.props
    const params = queryString.parse(window.location.search)

    if (e.target.value > 0) {
      params[param] = e.target.value
    } else {
      delete params[param]
    }

    this.setState({
      number: e.target.value
    })

    window.history.replaceState({}, ``, `?${queryString.stringify(params)}`)
  }

  render() {
    const { name } = this.props

    return (
      <div className="filter-number">
        <div className="filter-heading">{name}</div>
        <input
          data-testid="filter-number-input"
          min={0}
          onChange={this.handleChange.bind(this)}
          value={this.state.number}
          type="number"
        />
      </div>
    )
  }
}

export const FilterNumber = withRouter(FilterNumberClass)
