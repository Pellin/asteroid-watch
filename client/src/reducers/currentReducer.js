export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_CURRENT':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
