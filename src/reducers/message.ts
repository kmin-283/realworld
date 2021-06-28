import { AnyAction } from "redux";
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionType";

const initialState = {};

export default (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}