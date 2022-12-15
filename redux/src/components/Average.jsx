import React from 'react'
import Card from './Card'

export default props => {
  return (
    <Card title="Average of Numbers" green>
      <div>
        <span>
          <span>Result: </span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  )
}