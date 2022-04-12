import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import loadReducer from "./loadReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; //

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  userReducer,
  loadReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
