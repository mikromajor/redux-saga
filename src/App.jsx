import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from "./store/countReducer";
import {
  fetchUsers,
  deleteUsers,
  deleteUsersVsDelay,
} from "./store/userReducer";
import "./style.css";

const App = () => {
  const count = useSelector(
    (state) => state.countReducer.count
  );
  const users = useSelector(
    (state) => state.userReducer.users
  );
  const dispatch = useDispatch();
  console.log("count in App ->", count);
  console.log("users in App ->", users);
  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button
          className='btn'
          onClick={() => dispatch(asyncIncrementCreator())}
        >
          + 1 vs delay
        </button>
        <button
          className='btn'
          onClick={() => dispatch(incrementCreator())}
        >
          + 1
        </button>
        <button
          className='btn'
          onClick={() => dispatch(asyncDecrementCreator())}
        >
          -1 vs delay
        </button>
        <button
          className='btn'
          onClick={() => dispatch(decrementCreator())}
        >
          - 1
        </button>

        <button
          className='btn'
          onClick={() => dispatch(fetchUsers())}
        >
          set Users
        </button>
        <button
          className='btn'
          onClick={() => dispatch(deleteUsers())}
        >
          delete Users
        </button>
        <button
          className='btn'
          onClick={() => dispatch(deleteUsersVsDelay())}
        >
          delete user vs delay
        </button>
      </div>
      <div className='users'>
        {users?.length ? (
          users.map((user, i) => (
            <div key={i} className='user'>
              {user.name}
            </div>
          ))
        ) : (
          <div>no users</div>
        )}
      </div>
    </div>
  );
};

export default App;
