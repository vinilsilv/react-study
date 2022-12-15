import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Average = props => {
  const { min, max } = props
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

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Average)