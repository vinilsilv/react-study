const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAB_SELECTED":
      const selected = action.payload
      return {
        ...state,
        selected
      }
    case 'TAB_SHOWED':
      return {
        ...state,
        visible: action.payload
      }
    default:
      return state
  }
}