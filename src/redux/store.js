import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { thunk } from "redux-thunk";
import { carsReducer } from "./reducers/carsReducer";
import { alertReducer } from "./reducers/alertsReducer";
const composeEnhancers = composeWithDevTools({
  // Specify options if needed
});
const rootReducer = combineReducers({
  carsReducer,
  alertReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
