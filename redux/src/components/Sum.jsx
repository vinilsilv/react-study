import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Sum(props) {
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

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Sum)