import produce from "immer";
import { types } from "../actions/types";

const init = {
  location: {
    address: "",
    weather: null,
    coordinates: null,
  },
  history: [],
};

export const forecast = produce((draft, action) => {
  switch (action.type) {
    case types.SET_HISTORY:
      draft.history = action.history;
      return draft;
    case types.ADD_TO_HISTORY:
      draft.location = action.payload;
      return draft;
    case types.SET_LOCATION:
      draft.location.coordinates = action.coordinates;
      draft.location.address = action.address;
      return draft;
    case types.SET_WEATHER:
      draft.location.weather = action.weather;
      return draft;
    default:
      return draft;
  }
}, init);
