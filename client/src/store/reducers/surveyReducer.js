import { FETCH_SURVEY } from "../actions/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_SURVEY:
      return action.payload || false;
    default:
      return state;
  }
};
