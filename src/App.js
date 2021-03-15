import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Home } from './Home'
import { Beers } from './routes/beers/Beers'

import { Magic } from './routes/magic/Magic'

import './css/normalize.css'
import './css/custom-properties.css'
import styles from './App.module.css'

// interface with two different apis
// https://punkapi.com/documentation/v2
// https://docs.magicthegathering.io/#api_v1cards_list

export const routes = [
  {
    path: `/beers`,
    name: `Beers`,
    component: Beers
  },
  {
    path: `/magic`,
    name: `Magic`,
    component: Magic
  }
]

function App() {
  return (
    <BrowserRouter>
      <header className={`${styles.header} ${styles.container}`}>
        <h1>Punk Magic</h1>
        <nav>
          {routes.map(({ path, name }) => <Link key={path} to={path}>{name}</Link>)}
        </nav>
      </header>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
