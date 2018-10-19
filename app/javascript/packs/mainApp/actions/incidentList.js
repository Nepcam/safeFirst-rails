import request from 'superagent';

export function fetchFoundIncidentID(foundIncidentID) {
  return {
    type: 'Incident_ID',
    foundIncidentID
  }
}

export function addFoundIncidentID() {
  return {
    type: 'ADD_INCIDENT_ID',
    payload: {
      incident: id,
      hazard: id
    }
  }
}

export function getIncidentID() {
  return (dispatch) => {
    request
      .get('api/incidentID')
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return
        }
        dispatch(fetchFoundIncidentID(res.body))
      })
  }
}

export function addIncident(displayIncident) {
  return dispatch => {
    request
      .post('/api/found')
      .send(displayIncident)
      .end((err, res) => {
        if (err) {
          console.error(err.message);
          return
        }
        dispatch(AddIncidentID(displayIncidentList))
      })
  }
}