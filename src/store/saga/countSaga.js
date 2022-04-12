import {
  put,
  takeEvery,
  takeLeading,
} from "redux-saga/effects";
import {
  decrementCreator,
  incrementCreator,
} from "../countReducer";
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
} from "../constants";

const delay = (ms) =>
  new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeLeading(ASYNC_INCREMENT, incrementWorker);//не запустится ранее окончания предыдущего action-a
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);// Запускает на каждый action.
}
