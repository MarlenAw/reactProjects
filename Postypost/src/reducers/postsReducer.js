import _ from 'lodash';
import { FETCH_POSTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // _.mapKeys turns an array of objects to objects of objects - el id that belongs
    // to an object becomes the key of that object and the object is the value of it..that way accessing an object is much easier
    default:
      return state;
  }
}
