import React from 'react'
import Card from './Card'

export default props => {
  return (
    <Card title="Random Number" blue>
      <div>
        <span>
          <span>Result: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  )
}