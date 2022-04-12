import {
  SET_USERS,
  FETCH_USERS,
  DELETE_USERS,
  DELETE_USERS_VS_DELAY,
  defaultUsersState,
} from "./constants";

export default function userReducer(
  state = defaultUsersState,
  action
) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case DELETE_USERS:
      return { ...state, users: [] };
    default:
      return state;
  }
}

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const deleteUsers = () => ({
  type: DELETE_USERS,
});
export const deleteUsersVsDelay = () => ({
  type: DELETE_USERS_VS_DELAY,
});
