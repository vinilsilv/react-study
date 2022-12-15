import React from 'react'
import Card from './Card'

export default props => {
  const { min, max} = props
  const average = (max + min) / 2
  return (
    <Card title="Average of Numbers" green>
      <div>
        <span>
          <span>Result: </span>
          <strong>{average}</strong>
        </span>
      </div>
    </Card>
  )
}