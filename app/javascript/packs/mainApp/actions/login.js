import request from '../utils/api';
import { saveUserToken } from '../utils/auth';

function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
  //COME BACK AND FIX IN THE FUTURE. Disabled for dev and POC purposes. 

  // return dispatch => {
  //   dispatch(requestLogin());
  //   return request('post', 'auth/login', creds)
  //     .then((response) => {
  //       const userInfo = saveUserToken(response.body.token);
  //       dispatch(receiveLogin(userInfo));
  //       document.location = "/#/"
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       dispatch(loginError(err.message));
  //     })
  // }
}