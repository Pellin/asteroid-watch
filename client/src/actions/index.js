export const fetchSentries = () => async dispatch => {
  const response = await fetch('/api/sentries');
  const asteroids = await response.json();

  dispatch({ type: 'FETCH_SENTRIES', payload: asteroids });
};

export const fetchCurrent = () => async dispatch => {
  const response = await fetch('/api/current');
  const asteroids = await response.json();
  
  dispatch({ type: 'FETCH_CURRENT', payload: asteroids });
};

export const fetchAsteroid = id => async dispatch => {
  const response = await fetch(`api/asteroid?id=${id}`);
  const asteroid = await response.json();
  dispatch({ type: 'FETCH_ASTEROID', payload: asteroid });
};

export const clearAsteroid = () => dispatch => {
  dispatch({ type: 'CLEAR_ASTEROID' })
}

export const sortBySize = () => ({
  type: 'SORT_BY_SIZE'
});

export const sortByImpactProb = () => ({
  type: 'SORT_BY_IMPACT_PROB'
});

export const sortByTime = () => ({
  type: 'SORT_BY_TIME'
});
