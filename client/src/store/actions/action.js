import axios from "axios";
import { FETCH_USER, FETCH_SURVEY } from "./actionTypes";

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

export function fetchMySurveys() {
  return async dispatch => {
    const surveys = await axios.get("/api/mysurveys");
    dispatch({ type: FETCH_SURVEY, payload: surveys.data.users });
  };
}
