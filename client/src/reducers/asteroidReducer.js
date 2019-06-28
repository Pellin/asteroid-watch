export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_ASTEROID':
      return {
        ...state,
        ...action.payload};
      case 'CLEAR_ASTEROID':
        return {
          state: null
        }
    default:
      return state;
  }
};