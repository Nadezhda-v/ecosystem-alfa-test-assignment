import { setToken } from '../../api/token';
import {
  UPDATE_TOKEN,
  DELETE_TOKEN,
  TOKEN_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_ERROR,
} from './tokenAction';

const initinalState = {
  token: '',
  loading: false,
  error: '',
};

const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }

  if (action.type === DELETE_TOKEN) {
    setToken('');
  }

  next(action);
};

const tokenReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      return {
        ...state,
        token: '',
      };

    case TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case TOKEN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        error: '',
      };

    case TOKEN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export {
  tokenReducer,
  tokenMiddleware,
};
