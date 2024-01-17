import {
  URL_AUTH,
  ACCESS_KEY,
  RESPONSE_TYPE,
  REDIRECT_URI,
  SCOPE_STRING,
} from './constants';

const params = {
  client_id: ACCESS_KEY,
  response_type: RESPONSE_TYPE,
  redirect_uri: REDIRECT_URI,
  scope: SCOPE_STRING,
};

const searchParams = new URLSearchParams(params);
const urlAuth = `${URL_AUTH}${searchParams.toString()}`;

export default urlAuth;
