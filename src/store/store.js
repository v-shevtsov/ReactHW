import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/reducer"
import thunk from "redux-thunk";
import logger from 'redux-logger';

const enchanter = applyMiddleware(thunk, logger);

const store = createStore(
    reducer,
    enchanter
);

export default store;

