export default function foundIncidents(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_REG_INCIDENTS':
      return action.foundIncidents;
    case 'ADD_FOUND_INCIDENT':
      return [...state, action.payload];
    default:
      return state
  }
}
