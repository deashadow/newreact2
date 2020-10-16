import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import allReducers from "./reducers";
import todoCart from "./todoCart";

// store
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*store.subscribe( () => console.log('counter='+store.getState()));
store.dispatch( incr())
store.dispatch( incr())
store.dispatch( incr())
store.dispatch( decr())*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
