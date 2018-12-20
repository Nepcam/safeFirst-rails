const initialState = {
  isFetching: false,
  id: null,
  name: '',
  location: '',
  errorMessage: ''
};

export default function site(state = initialState, action) {
  switch (action.type) {
    case 'SITE_CREATE_REQUEST':
      return {
        ...state,
      };
    case 'SITE_CREATE_SUCCESS':
      return {
        ...state,
        ...action.site
      };
    case 'SITE_CREATE_FAILURE':
      return {
        ...state,
        errorMessage: action.message
      };
    default:
      return state
  }
}