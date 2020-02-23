import types from "../types"

const initialState = {
  amount: 7,
}
export default (state = initialState, action) => {

  switch (action.type) {
    case types.ADD: {
      const { number } = action
      const newResult = state.amount + number
      return {
        ...state,
        amount: newResult
      }
    }
    case types.SUBTRACT: {
      const { number } = action
      const newResult = state.amount - number
      return {
        ...state,
        amount: newResult
      }
    }
    default: {
      return state
    }
  }
};
