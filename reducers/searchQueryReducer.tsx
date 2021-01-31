const initialState = {text: ''}

const searchQueryReducer = (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_QUERY":
      return {...state, text: action.payload};
      break;
    case "RESET_QUERY":
      return {...state, text: ''};
      break;
    default:
      return state;
  }
}

export default searchQueryReducer;