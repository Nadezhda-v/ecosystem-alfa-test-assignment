import {
  ACCESS_KEY,
  REDIRECT_URI,
  CLIENT_SECRET,
  GRANT_TYPE,
} from './constants';

const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

const getCode = () => {
  const code = new URLSearchParams(location.search)
    .get('code');

  return code;
};

const getToken = () => {
  let token = '';

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
    setToken(token);
  }

  return token;
};

const CODE = getCode();

const params = {
  client_id: ACCESS_KEY,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  code: CODE,
  grant_type: GRANT_TYPE,
};

const searchParams = new URLSearchParams(params);
const urlAuthToken = `https://unsplash.com/oauth/token?${searchParams.toString()}`;

export default urlAuthToken;

export {
  getCode,
  getToken,
  setToken,
};
