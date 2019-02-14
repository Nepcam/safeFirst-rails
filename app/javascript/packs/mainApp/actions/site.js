import request from '../utils/api';

export function newSite(site, callback) {
  request
    .post('/sites')
    .send(site)
    .end((err, res) => {
      callback(err, res)
    });
}

function siteCreateRequest() {
  return {
    type: 'SITE_CREATE_REQUEST'
  }
}

export function siteCreateSuccess(site) {
  return {
    type: 'SITE_CREATE_SUCCESS',
    site
  }
}

export function siteCreateFailure(message) {
  return {
    type: 'SITE_CREATE_FAILURE',
    message
  }
}

export function createSite(site) {
  return dispatch => {
    dispatch(siteCreateRequest());
    return request('post', '/sites', site)
      .end((err, res) => {
        if (err || res.status !== 200) {
          dispatch(siteCreateFailure(`${err.message}: ${err.response.body.error}`));
        } else {
          dispatch(siteCreateSuccess(res.body.site));
          document.location = "/#";
        }
      });
  };
}