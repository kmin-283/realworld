import {AnyAction, applyMiddleware, createStore, Reducer} from "redux";
import { promiseMiddleware } from "./middleware";
import thunk from 'redux-thunk';

const defaultState = {
  appName: 'conduit',
  articles: null
};

const reducer: Reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

// const middleware = applyMiddleware(promiseMiddleware);
const middleware = [thunk];

const store = createStore(reducer, middleware);

export default store;