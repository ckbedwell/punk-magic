import React from 'react';
import { render } from '@testing-library/react';

import App, { routes } from './App';

it('should render routes correctly in the header', () => {
  const { getAllByText } = render(<App />)

  routes.forEach(route => {
    const link = getAllByText(route.name)[0]
    expect(link).toBeInTheDocument()
    expect(link.href).toBe(`${global.location.origin}${route.path}`)
  })
})
