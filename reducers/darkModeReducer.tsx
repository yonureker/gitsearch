const initialState = {
  theme: false
}

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {...state, theme: !state.theme}
      break;
    default:
      return state;
  }
}

export default darkModeReducer;