import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from './App'

export const Home = () => (
  routes.map(({ path, name }) => <div><Link key={path} to={path}>{name}</Link></div>)
)
