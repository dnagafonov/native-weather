import produce from "immer";
import { types } from "../actions/types";

const init = {
  msg: null
};

export const error = produce((draft, action) => {
  switch (action.type) {
    case types.ERROR:
      draft.msg = action.payload;
      return draft;
    default:
      return draft;
  }
}, init);
