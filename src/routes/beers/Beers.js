import React from 'react'
import { useLocation } from 'react-router-dom'
import BeersList from './BeerList'
import { BeersFilters } from './BeersFilters'

import styles from './Beers.module.css'

export function Beers() {
  const { pathname, search } = useLocation()
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState(undefined)
  const [error, setError] = React.useState(undefined)
  const [apiUrl, setApiUrl] = React.useState(undefined)

  React.useEffect(() => {
    setApiUrl(`https://api.punkapi.com/v2/beers${search}`)
  }, [pathname, search])

  React.useEffect(() => {
    if (apiUrl) {
      setLoading(true)
      fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
          setLoading(false)
          setData(json)
        })
        .catch(err => setError(err.toString()))
    }
  }, [apiUrl])

  return (
    <div className={styles.container}>
      <BeersFilters />
      <BeersList
        error={error}
        loading={loading}
        beers={data}
      />
    </div>
  )
}
