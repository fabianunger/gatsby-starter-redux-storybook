import types from "../types"

const initialState = {
  items: 7,
}
export default (state = initialState, action) => {

  switch (action.type) {
    case types.ADD: {
      const { number } = action
      const newResult = state.items + number
      return {
        ...state,
        items: newResult
      }
    }
    case types.SUBTRACT: {
      const { number } = action
      const newResult = state.items - number
      return {
        ...state,
        items: newResult
      }
    }
    default: {
      return state
    }
  }
};
