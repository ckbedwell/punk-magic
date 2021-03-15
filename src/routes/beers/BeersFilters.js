import React from 'react'

import { FilterNumber } from '../../components/FilterNumber'
import { FilterRadio } from '../../components/FilterRadio'
import beerFilters from './beerFilters.json'

export const BeersFilters = () => {
  return (
    <div>
      {beerFilters.map(renderFilter)}
    </div>
  )

  function renderFilter(filter) {
    const filterTypeMap = {
      number: FilterNumber,
      radio: FilterRadio,
    }

    const Component = filterTypeMap[filter.type]
    
    return (
      <Component
        key={filter.param}
        {...filter}
      />
    )
  }
}