import React from 'react'
import MagicCard from './MagicCard'

export class Magic extends React.Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(`https://api.magicthegathering.io/v1/cards`)
      .then(response => response.json())
      .then(json => this.setState({
        cards: json.cards
      }))
  }

  render() {
    const { cards } = this.state
    return (
      <div style={{ display: `grid`, gridTemplateColumns: `repeat(4, 1fr)`, gridGap: `20px` }}>
        {cards.map(card => <MagicCard {...card} />)}
      </div>
    )
  }
}
