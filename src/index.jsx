import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// In your package.json: change this line
// "start": "react-scripts start"
// to
// "start": "react-scripts --openssl-legacy-provider start"
