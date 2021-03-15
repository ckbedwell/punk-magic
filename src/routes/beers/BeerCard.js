import React from 'react'

import styles from './BeerCard.module.css'

export const BeerCard = (props) => {
  return (
    <div className={styles.container}>
      <img alt={props.name} src={props.image_url} />
      <h4>{props.name} - {props.abv}%</h4>
      <h5>{props.tagline}</h5>
      <p>{props.description}</p>
      {renderHops()}
      {renderGoodWith()}
    </div>
  )

  function renderGoodWith() {
    return (
      <React.Fragment>
        <div>Good with:</div>
        <ul>
          {props.food_pairing.map(food => <li key={food}>{food}</li>)}
        </ul>
      </React.Fragment>
    )
  }

  
  function renderHops() {
    return (
      <React.Fragment>
        <div>Hops:</div>
        <ul>
          {props.ingredients.hops.map((hop, i) => <li key={hop.add+hop.name+hop.amount.value+i}>{hop.name}</li>)}
        </ul>
      </React.Fragment>
    )
  }
}