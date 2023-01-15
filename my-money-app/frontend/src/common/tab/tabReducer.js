const INITIAL_STATE = { selected: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAB_SELECTED":
      const selected = action.payload
      return {
        ...state,
        selected
      }
    default:
      return state
  }
}