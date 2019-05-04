import { FETCH_USER, LOGOUT_USER } from "../actions/actionTypes";

export default (state = null, action) => {
  console.log("state", state);

  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};
