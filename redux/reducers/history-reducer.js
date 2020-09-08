import { types } from "../actions/types";

export const history = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    default:
      return state;
  }
};
