import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';

function getPostAPI(postId) {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'post/GET_POST_PENDING';
const GET_POST_SUCCESS = 'post/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'post/GET_POST_FAILURE';

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

export const getPost = (postId) => async (dispatch) => {
  dispatch(getPostPending());
  try {
    const response = await getPostAPI(postId);
    dispatch(getPostSuccess(response));
  } catch (e) {
    dispatch(getPostFailure(e));
  }
}

const initialState = {
  fetching: false,
  error: false,
  title: '',
  body: '',
};

export default handleActions({
  [GET_POST_PENDING]: (state, action) => ({ ...state, fetching: true, error: false }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    fetching: false,
    title: action.payload.data.title,
    body: action.payload.data.body
  }),
  [GET_POST_FAILURE]: (state, action) => ({ ...state, fetching: false, error: true })
}, initialState);
