import React from 'react'
import { BeerCard } from './BeerCard'

import styles from './BeerList.module.css'

const BeerList = ({ 
  beers,
  error,
  loading
}) => {
  if (loading) {
    return (
      <div className={styles.container}>
        Loading Beers
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        {error}
      </div>
    )
  }

  if (beers) {
    if (!beers.length) {
      return (
        <div className={styles.container}>
          No beers found
        </div>
      )
    }

    return (
      <div className={styles.container}>
        {beers.map(beer => (
          <BeerCard
            key={beer.id}
            {...beer}
          />
        ))}
      </div>
    )
  }

  return null
}

export default BeerList
