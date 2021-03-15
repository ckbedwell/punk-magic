import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render } from '@testing-library/react'

import { FilterNumber } from './FilterNumber'

const param = `testparam`
const query = 3

describe(`<FilterNumber />`, () => {
  it(`should update the url`, () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <FilterNumber
          name="Test Param"
          param={param}
        />
      </BrowserRouter>
    )

    fireEvent.change(getByTestId(`filter-number-input`), { target: { value: query }})
    expect(global.location.search).toBe(`?${param}=${query}`)
  })
})
