import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  dispatch(authRequest());

  axios(`https://api.unsplash.com/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => {
      const name = data.first_name;
      const image = data.profile_image.small;
      const dataUser = { name, image };
      dispatch(authRequestSuccess(dataUser));
    })
    .catch((error) => {
      dispatch(authRequestError(error.toString()));
    });
};
