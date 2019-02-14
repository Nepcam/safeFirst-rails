const initialState = {
  isFetching: false,
  sites: [],
  errorMessage: ''
};

export default function sites(state = initialState, action) {
  switch (action.type) {
    case 'SITES_FETCH_REQUEST':
      return {
        ...state,
        isFetching: true,
      };
    case 'SITES_FETCH_SUCCESS':
      return {
        ...state,
        sites: action.sites,
        isFetching: false
      };
    case 'SITES_FETCH_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case 'SITE_CREATE_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'SITE_CREATE_SUCCESS':
      return {
        ...state,
        sites: state.sites.concat(action.site),
        isFetching: false
      };
    case 'SITE_CREATE_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    default:
      return state
  }
}
