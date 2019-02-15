const initialState = {
  isFetching: false,
  current: null,
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
      let currentSite = state.current;

      if (action.sites.length === 1) {
        currentSite = action.sites[0];
      }

      return {
        ...state,
        sites: action.sites,
        current: currentSite,
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
    case 'SITE_SET_CURRENT':
      return {
        ...state,
        current: action.siteId
      };
    default:
      return state
  }
}
