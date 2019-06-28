export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_SENTRIES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};