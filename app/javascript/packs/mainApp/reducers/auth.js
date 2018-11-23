import { isAuthenticated } from '../utils/auth';

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  userName: '',
  errorMessage: ''
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        userName: action.userName
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        userName: null
      };
    case 'LOGOUT_ERROR':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      };
    default:
      return state
  }
}
