import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  // console.log(action); //this will show you the payload in the console
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // That way the payload in console.log is not an empty string..sondern its a false as in the user is not logged in
    default:
      return state;
  }
}
