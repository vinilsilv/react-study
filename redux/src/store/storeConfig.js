import { legacy_createStore as createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numbers: function(state, action) {
    
    switch(action.type) {
      case 'MIN_NUM_CHANGED':
        return {
          ...state,
          min: action.payload
        }
      case 'MAX_NUM_CHANGED':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 7,
          max: 31
        }
    }
  },
  names: function(state, action) {
    console.log('Name Reducer')
    console.log(state, action)
    return [
      'John',
      'Peter',
      'Charles'
    ]
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig