import request from '../utils/api';
import { setUserToken } from '../utils/auth';
import { unsetCoverPage } from './login';

function requestRegistration() {
  return {
    type: 'REGISTER_REQUEST'
  }
}

export function registrationSuccess(userName) {
  return {
    type: 'REGISTER_SUCCESS',
    userName
  }
}

export function registrationError(message) {
  return {
    type: 'REGISTER_FAILURE',
    message
  }
}

export function registerUserRequest(credentials) {
  return dispatch => {
    dispatch(requestRegistration());
    return request('post', '/users', credentials)
      .end((err, res) => {
        if (err || res.status !== 200) {
          dispatch(registrationError(`${err.message}: ${err.response.body.error}`));
        } else {
          setUserToken(res.headers.authorization);
          unsetCoverPage();

          dispatch(registrationSuccess(res.body.name));
          document.location = "/#";
        }
      });
  };
}
