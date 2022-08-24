import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./components/App";
import combineReducers from "./reducers/index";
import "./main.css";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(combineReducers, applyMiddleware(thunk, logger));
//Provider // consumer
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
