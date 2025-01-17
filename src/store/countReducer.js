import {
  INCREMENT,
  ASYNC_INCREMENT,
  DECREMENT,
  ASYNC_DECREMENT,
  defaultCountState,
} from "./constants";

export default function countReducer(
  state = defaultCountState,
  action
) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const incrementCreator = () => ({ type: INCREMENT });
export const asyncIncrementCreator = () => ({
  type: ASYNC_INCREMENT,
});
export const decrementCreator = () => ({ type: DECREMENT });
export const asyncDecrementCreator = () => ({
  type: ASYNC_DECREMENT,
});
