import request from '../utils/api';
import { setUserToken } from '../utils/auth';

export function setCoverPage() {
  return {
    type: 'SET_COVER_PAGE'
  }
}

export function unsetCoverPage() {
  return {
    type: 'UNSET_COVER_PAGE'
  }
}

function requestLogin() {
  return {
    type: 'LOGIN_REQUEST'
  }
}

export function loginSuccess(userName) {
  return {
    type: 'LOGIN_SUCCESS',
    userName
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    message
  }
}

export function loginUser(credentials) {
  return dispatch => {
    dispatch(requestLogin());
    return request('post', '/users/sign_in', credentials)
      .end((err, res) => {
        if (err || res.status !== 200) {
          dispatch(loginError(`${err.message}: ${err.response.body.error}`));
        } else {
          setUserToken(res.headers.authorization);
          unsetCoverPage();

          dispatch(loginSuccess(res.body.name));
          document.location = "/#"
        }
      });
  };
}
