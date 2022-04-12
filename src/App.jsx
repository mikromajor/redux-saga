import React from "react";
import {
  //useSelector,
  connect,
} from "react-redux";

import {
  Users,
  Buttons,
  ReactCreateElement,
} from "./components";
// import { MyClassComponent } from "./components";
import { Loader, Error } from "./ui";
import "./style.css";

const App = ({ count, users, loader, error }) => {
  // console.log("count in App ->", count);
  // console.log("users in App ->", users);
  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <ReactCreateElement />
      <Buttons />
      {loader ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <Users users={users} />
      )}
      {/* <MyClassComponent>
        My class component
      </MyClassComponent> */}
    </div>
  );
};
const createAppProps = (store) => ({
  count: store.countReducer.count,
  users: store.userReducer.users,
  loader: store.loadReducer.loader,
  error: store.loadReducer.error,
});

export default connect(createAppProps, null)(App);

// connect(createAppProps, createDispatch)) - необходима если хочу передавать хранилище редакса через пропcы компонента
// I can "pull out" the store in two way :
// from component props or  useSelector
//    1 - using useSelector
//    2 - using connect

// const {count, users, loader, error} = useSelector(
//   (store) =>({
//   count: store.countReducer.count,
// users: store.userReducer.users,
// loader: store.loadReducer.loader,
// error: store.loadReducer.error,
//   })
// );
