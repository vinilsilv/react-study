const initialState = {
  description: '', list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return {
        ...state,
        description: action.payload
      }
    case 'TODO_SEARCHED':
      return {
        ...state,
        list: action.payload.data
      }
    default:
      return state
  }
}