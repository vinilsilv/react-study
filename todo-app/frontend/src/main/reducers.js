import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Read a book',
    list: [{
      _id: 1,
      description: 'Wash the dishes',
      done: true
    }, {
      _id: 2,
      description: 'Join a meeting at 10:00AM',
      done: false
    }, {
      id: 3,
      description: 'Study python',
      done: false
    }]
  })
})

export default rootReducer