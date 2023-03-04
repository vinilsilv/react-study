const userKey = '_mymoney_user'
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: true
}

export default (state = INITIAL_STATE) => {
  switch (actionTypes.type) {
    case 'TOKEN_VALIDATED':
      if (actionTypes.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        return { ...state, validToken: false, user: null }
      }
    case 'USER_FETCHED':
      localStorage.setItem(userKey, JSON.stringify(action.payload))
      return { ...state, user: action.payload, validToken: true }
    default:
      return state
  }
}