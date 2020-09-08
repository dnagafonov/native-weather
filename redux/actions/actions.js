import { types } from "./types";
import { getHistoryFromAS, setHistoryToAS } from "../../tools/requests";

export const updateHistory = async () => {
    const history = await getHistoryFromAS();
    return { type: types.UPDATE_HISTORY, payload: history }
};

export const addToHistory = (request) => async (dispatch) => {
  const history = await getHistoryFromAS();
  setHistoryToAS([...history, request ]);
  dispatch(updateHistory());
};
