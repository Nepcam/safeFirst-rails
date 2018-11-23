import { removeUserToken } from '../utils/auth';
import request from '../utils/api';

function requestLogout() {
  return {
    type: 'LOGOUT_REQUEST'
  }
}

function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

function logoutError() {
  return {
    type: 'LOGOUT_ERROR'
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    return request('delete', '/users/sign_out')
      .end((err, res) => {
        if (res.status === 204) {
          removeUserToken();
          document.location = "/#";
          dispatch(logoutSuccess());
        } else {
          dispatch(logoutError(`${err.message}: ${err.response.body.error}`));
        }
      });
  }
}
