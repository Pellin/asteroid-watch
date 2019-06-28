export default (sentries, { sortBy }) => {
  return sentries.sort((a, b) => {
    if (sortBy === 'Size'){
      return b.diameter - a.diameter;
    } else if (sortBy === 'Impact Probability') {
      return b.impactProb - a.impactProb;
    } else if (sortBy === 'Time') {
      return a.yearMin - b.yearMin;
    } else return a - b;
  } )
};