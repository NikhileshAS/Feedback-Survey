import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "antd/dist/antd.css";

import App from "./components/App";
import reducer from "./store/reducers/reducer";
import axios from "axios";

const store = createStore(reducer, applyMiddleware(thunk));
window.axios = axios;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
