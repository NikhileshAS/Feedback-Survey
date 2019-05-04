import axios from "axios";
import { FETCH_USER, LOGOUT_USER } from "./actionTypes";

export function fetchUser() {
  return async dispatch => {
    const user = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: user.data });
  };
}

export function logoutUser() {
  console.log("Logout User");
  return async dispatch => {
    const user = await axios.get("/api/logout");
    dispatch({ type: LOGOUT_USER });
  };
}
