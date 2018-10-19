export default function AddButton(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_HAZARD':
      return action.Hazard;
    case 'ADD_HAZARD':
      return [...state, action.payload];
    default:
      return state
  }
}
