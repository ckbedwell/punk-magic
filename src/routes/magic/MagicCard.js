import React from 'react'

import './MagicCard.css'

export default function MagicCard({
  name,
  imageUrl,
  rarity,
  text,
  type,
}) {
  return (
    <div className="magic-card">
      <img alt={name} src={imageUrl} />
      <h4>{name} - {rarity}</h4>
      <h5>{type}</h5>
      <p>{text}</p>
    </div>
  )
}