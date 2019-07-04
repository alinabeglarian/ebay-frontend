import React from 'react'
import { Link } from 'react-router-dom'

export default function Advertisements(props) {
  if (!props.advertisements) return 'Loading...'
  return (
    <div>
      <h1>Advertisements</h1>
      <ul>
        {props.advertisements.map((ad) => 
          <div key={ad.id}>
            <li><Link to={`/${ad.id}`}>{ad.title}</Link></li>
            <li>Price: €{ad.price}</li>
          </div>
        )}
      </ul>
    </div>
  )
}