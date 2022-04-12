import { useDispatch } from "react-redux";
import {
  asyncDecrementCreator,
  asyncIncrementCreator,
  decrementCreator,
  incrementCreator,
} from "../../store/countReducer";

import {
  fetchUsers,
  deleteUsers,
  deleteUsersVsDelay,
} from "../../store/userReducer";

import { setLoading } from "../../store/loadReducer";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
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
        onClick={() => {
          dispatch(setLoading());
          dispatch(fetchUsers());
        }}
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
        onClick={(e) => {
          dispatch(setLoading());
          dispatch(deleteUsersVsDelay());
        }}
      >
        delete user vs delay
      </button>
    </div>
  );
};
export default Buttons;
