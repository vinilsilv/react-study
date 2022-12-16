import {
  MIN_NUM_CHANGED,
  MAX_NUM_CHANGED
} from './actionTypes'

export function changeMinNumber(number) {
  return {
    type: MIN_NUM_CHANGED,
    payload: number
  }
}

export function changeMaxNumber(number) {
  return {
    type: MAX_NUM_CHANGED,
    payload: number
  }
}