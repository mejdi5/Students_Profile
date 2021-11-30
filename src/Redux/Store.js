import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import thunk from "redux-thunk" 

const middleware = [thunk];
const Store = createStore(Reducer,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )) 

export default Store;