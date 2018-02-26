import axios from 'axios';
import { FETCH_POSTS, CREATE_POST, GET_POST, DELETE_POST } from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=fdgfh3tf36';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return { type: FETCH_POSTS, payload: request };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback()); //adding a callback so that we can redirect to home once the user click on submit - this.props.history.push('/'); in PostsNew.js
  return { type: CREATE_POST, payload: request };
};

export const getPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return { type: GET_POST, payload: request };
};

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return { type: DELETE_POST, payload: id };
};
