const defaultState = {
  sortBy: 'Size'
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'SORT_BY_SIZE':
      return {
        ...state,
        sortBy: 'Size'
      }
    case 'SORT_BY_IMPACT_PROB':
      return {
        ...state,
        sortBy: 'Impact Probability'
      }
    case 'SORT_BY_TIME':
        return {
          ...state,
          sortBy: 'Time'
        }
    case 'SORT_BY_SPEED':
        return {
          ...state,
          sortBy: 'Speed'
        }
    case 'SORT_BY_PROXIMITY':
        return {
          ...state,
          sortBy: 'Proximity'
        }
    default:
      return state
  }
};