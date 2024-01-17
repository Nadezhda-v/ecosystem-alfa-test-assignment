import axios from 'axios';
import urlAuthToken from '../../api/token';

export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';
export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_ERROR = 'TOKEN_REQUEST_ERROR';
import { setToken } from '../../api/token';

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

export const tokenRequest = () => ({
  type: TOKEN_REQUEST,
});

export const tokenRequestSuccess = (token) => ({
  type: TOKEN_REQUEST_SUCCESS,
  token,
});

export const tokenRequestError = (error) => ({
  type: TOKEN_REQUEST_ERROR,
  error,
});


export const tokenRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (token) return;

  dispatch(tokenRequest());

  axios(`${urlAuthToken}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(({ data }) => {
      const token = data.access_token;
      setToken(token);
      dispatch(tokenRequestSuccess(token));
    })
    .catch((error) => {
      dispatch(tokenRequestError(error.toString()));
    });
};
