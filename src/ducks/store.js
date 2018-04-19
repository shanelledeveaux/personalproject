import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";
import memberreducer from "./memberreducer";
import demoreducer from "./demoreducer";

const store = createStore(
  combineReducers({
    reducer,
    memberreducer,
    demoreducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
