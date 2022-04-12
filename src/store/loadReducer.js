import { LOADED, LOADING, ERROR } from "./constants";

const initState = { loader: false, error: null };

export default function loadReducer(
  state = initState,
  action
) {
  switch (action.type) {
    case LOADED:
      return { ...state, loader: false };
    case LOADING:
      return { ...state, loader: true, error: null };
    case ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export const setLoading = () => ({ type: LOADING });
export const setLoaded = () => ({ type: LOADED });
export const setError = (error) => ({
  type: ERROR,
  payload: error,
});
