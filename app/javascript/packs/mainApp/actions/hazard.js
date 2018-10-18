import request from 'superagent';

export function fetchFoundHazard(foundHazard) {
  return {
    type: 'RECEIVE_HAZARD',
    foundHazard
  }
}

export function addFoundHazard() {
  return {
    type: 'ADD_HAZARD',
    payload: {
      hazard: daily,
      meeting: id
    }
  }
}

export function getHazard() {
  return (dispatch) => {
    request
      .get('api/hazard')
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return
        }
        dispatch(fetchFoundHazard(res.body))
      })
  }
}

export function addHazard(displayHazard) {
  return dispatch => {
    request
      .post('/api/found')
      .send(displayHazard)
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return
        }
        dispatch(AddHazard(displayHazard))
      })
  }
}