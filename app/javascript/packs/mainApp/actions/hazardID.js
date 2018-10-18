import request from 'superagent';

export function fetchFoundHazardID(foundHazardID) {
  return {
    type: 'RECEIVE_HAZARD_ID',
    foundHazardID
  }
}

export function addFoundHazardID() {
  return {
    type: 'ADD_HAZARD_ID',
    payload: {
      meetings: id,
      hazard: id
    }
  }
}

export function getHazardID() {
  return (dispatch) => {
    request
      .get('api/hazardID')
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return
        }
        dispatch(fetchFoundHazardID(res.body))
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
        dispatch(AddHazardID(displayHazardID))
      })
  }
}