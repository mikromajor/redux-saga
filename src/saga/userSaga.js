import { put, takeEvery, call } from "redux-saga/effects";
import { setUsers } from "../store/userReducer";
import {
  FETCH_USERS,
  DELETE_USERS_VS_DELAY,
} from "../store/constants";

const fetchUsersFromApi = () =>
  fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
const delay = (ms) =>
  new Promise((res) => setTimeout(res, ms));

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(
    () => new Promise((res) => res(data.json()))
  );
  yield put(setUsers(json));
}

function* deleteUsersWorker() {
  yield delay(3000);
  yield put(setUsers([]));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
  yield takeEvery(DELETE_USERS_VS_DELAY, deleteUsersWorker);
}
