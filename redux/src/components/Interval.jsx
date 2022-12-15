import React from 'react'
import { connect } from 'react-redux'

import './Interval.css'
import Card from './Card'
import { changeMaxNumber, changeMinNumber } from '../store/actions/numbers'

function Interval(props) {
  const { min, max } = props;

  return (
    <Card title="Number Interval" red>
      <div className='Interval'>
        <span>
          <strong>Min.: </strong>
          <input
            onChange={(e) => props.changeMin(+e.target.value)}
            type="number"
            value={min} />
        </span>
        <span>
          <strong>Max.: </strong>
          <input
            onChange={(e) => props.changeMax(+e.target.value)}
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

function mapDispatchToProps(dispatch) {
  return {
    changeMin(number) {
      const action = changeMinNumber(number)
      dispatch(action)
    },
    changeMax(number) {
      const action = changeMaxNumber(number)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)