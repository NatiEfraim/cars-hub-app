import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

// Get the root element
const root = document.getElementById("root");

// Render the app within the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

// Run any additional setup or cleanup
reportWebVitals();
