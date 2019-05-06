import axios from "axios";
import { FETCH_USER } from "./actionTypes";

export function fetchUser() {
  return async dispatch => {
    const user = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: user.data });
  };
}

export function handleToken(token) {
  return async dispatch => {
    const res = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
}

export function submitSurvey(values) {
  return async dispatch => {
    const res = await axios.post("/api/surveys", values);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
}
