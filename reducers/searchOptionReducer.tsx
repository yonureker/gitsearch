const initialState = {value: 'repositories'}

const searchOptionReducer = (state = initialState, action) => {
  switch(action.type) {
    case "TOGGLE_OPTION":
      return {...state, value: action.payload};
      break;
    default:
      return state;
  }
}

export default searchOptionReducer;