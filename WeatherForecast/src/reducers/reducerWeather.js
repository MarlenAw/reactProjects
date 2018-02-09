import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  console.log("action received", action);

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); //in an array because we want multiple data coming back in
      return [action.payload.data, ...state];
  }

  return state;
}
