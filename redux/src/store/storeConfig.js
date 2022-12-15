import { legacy_createStore as createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numbers: function(state, action) {
    return {
      min: 7,
      max: 31
    }
  },
  names: function(state, action) {
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