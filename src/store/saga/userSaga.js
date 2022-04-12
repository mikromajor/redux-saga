import { put, takeEvery, call } from "redux-saga/effects";
import { setUsers, deleteUsers } from "../userReducer";
import { setLoaded, setError } from "../loadReducer";
import {
  FETCH_USERS,
  DELETE_USERS_VS_DELAY,
} from "../constants";

const fetchUsersFromApi = () =>
  fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
const delay = (ms) =>
  new Promise((res) => setTimeout(res, ms));

function* fetchUserWorker() {
  try {
    const response = yield call(fetchUsersFromApi);
    if (response.ok) {
      const user = yield response.json();

      yield put(setLoaded());
      yield put(setUsers(user));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(setLoaded());
    yield put(setError(error));
  }
}

function* deleteUsersWorker() {
  yield delay(2000);
  yield put(setLoaded());
  yield put(deleteUsers([]));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
  yield takeEvery(DELETE_USERS_VS_DELAY, deleteUsersWorker);
}

// Saga

// function* logIn(action) {
//   try {
//     const response = yield call(Api.logIn, action);

//     if (response.status >= 200 && response.status < 300) {
//       const user = yield response.json();

//       yield put({ type: types.LOG_IN_SUCCEEDED, user });
//     } else {
//       throw response;
//     }
//   } catch (error) {
//     yield put({ type: types.LOG_IN_FAILED, error });
//   }
// }
// Fetch

// fetchUser(action) {
//   const { username, password } = action.user;
//   const body = { username, password };

//   return fetch(LOGIN_URL, {
//     method,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body)
//   })
// }
