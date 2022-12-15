import './Interval.css'
import React from 'react'
import Card from './Card'

export default props => {

  return (
    <Card title="Number Interval" red>
      <div className='Interval'>
        <span>
          <strong>Min.: </strong>
          <input 
            type="number"
            value={10} />
        </span>
        <span>
          <strong>Max.: </strong>
          <input
            type="number"
            value={11} />
        </span>
      </div>
    </Card>
  )
}