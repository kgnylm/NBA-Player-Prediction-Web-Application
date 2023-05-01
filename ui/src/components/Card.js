import React from 'react'
import '../css/Card.css'

const Card = ({ player }) => {
  return (
    <div className="Card">
      <img className="card-img-top" src={player.Image} alt="Player" />
    </div>
  )
}

export default Card
