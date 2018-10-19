export default function AddButton(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_HAZARD_ID':
      return action.Hazard;
    case 'ADD_HAZARD_ID':
      return [...state, action.payload];
    default:
      return state
  }
}
