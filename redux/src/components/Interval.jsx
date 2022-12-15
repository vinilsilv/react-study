import './Interval.css'
import React from 'react'
import Card from './Card'

export default props => {
  const { min, setMin, max, setMax } = props

  return (
    <Card title="Number Interval" red>
      <div className='Interval'>
        <span>
          <strong>Min.: </strong>
          <input 
            onChange={(e) => setMin(+e.target.value)}
            type="number"
            value={min} />
        </span>
        <span>
          <strong>Max.: </strong>
          <input
            onChange={(e) => setMax(+e.target.value)}
            type="number"
            value={max} />
        </span>
      </div>
    </Card>
  )
}