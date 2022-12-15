import React from 'react'
import Card from './Card'

export default props => {
  const { min, max } = props
  const sum = max + min
  return (
    <Card title="Sum of Numbers" purple>
      <div>
        <span>
          <span>Result: </span>
          <strong>{sum}</strong>
        </span>
      </div>
    </Card>
  )
}