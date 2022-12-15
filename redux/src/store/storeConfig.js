import { legacy_createStore as createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  numbers: function(state, action) {
    console.log(state, '', action)
    return {
      min: 1,
      max: 10
    }
  },
  names: function(state, action) {
    console.log(state, '', action)
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