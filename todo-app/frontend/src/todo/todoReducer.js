const initialState = {
  description: 'Initial description',
  list: [{
    _id: 1,
    description: 'Study python',
    done: true
  }]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return {
        ...state,
        description: action.payload
      }
    default:
      return state
  }
}