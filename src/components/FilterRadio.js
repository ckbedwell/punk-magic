import React from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import './FilterRadio.css'

class FilterRadioClass extends React.Component {
  constructor(props) {
    super()

    this.state = {
      selected: queryString.parse(props.location.search)[props.param]
    }
  }

  handleChange(e) {
    const { history, param } = this.props
    const params = queryString.parse(window.location.search)

    if (e.target.value) {
      params[param] = e.target.value
    } else {
      delete params[param]
    }

    this.setState({
      selected: e.target.value
    })
    history.push(`?${queryString.stringify(params)}`)
  }

  render() {
    const { name, options, param } = this.props

    return (
      <div className="filter-radio">
        <div className="filter-heading">{name}</div>
        <div>
          <input
            checked={!this.state.selected}
            onChange={this.handleChange.bind(this)}
            type="radio"
            id={`${param}-none`}
            name={param}
            value={undefined}
          />
          <label htmlFor={`${param}-none`}>
            None
          </label>
        </div>
        {
          options.map(option => (
            <div key={option.value}>
              <input
                checked={this.state.selected === option.value}
                onChange={this.handleChange.bind(this)}
                type="radio"
                id={option.value}
                name={param}
                value={option.value}
              />
              <label htmlFor={option.value}>
                {option.name}
              </label>
            </div>
          ))
        }
      </div>
    )
  }
}

export const FilterRadio = withRouter(FilterRadioClass)