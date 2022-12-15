import React from 'react'
import { connect } from 'react-redux'

import './Interval.css'
import Card from './Card'

function Interval(props) {
  const { min, max } = props

  return (
    <Card title="Number Interval" red>
      <div className='Interval'>
        <span>
          <strong>Min.: </strong>
          <input
            readOnly
            type="number"
            value={min} />
        </span>
        <span>
          <strong>Max.: </strong>
          <input
            readOnly
            type="number"
            value={max} />
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Interval)