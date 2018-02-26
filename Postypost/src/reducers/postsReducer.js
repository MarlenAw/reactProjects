import _ from 'lodash';
import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); //if the state object has a key of the post id, then omit it/drop it from the object and return a new object that doesnt include that id anymore
    case GET_POST:
      //es5
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      //es6
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // _.mapKeys turns an array of objects to objects of objects - el id that belongs
    // to an object becomes the key of that object and the object is the value of it..that way accessing an object is much easier
    default:
      return state;
  }
}
