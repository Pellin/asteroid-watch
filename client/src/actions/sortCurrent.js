export default (current, { sortBy }) => {
  return current.sort((a, b) => {
    if (sortBy === 'Size'){
      return b.diameter.kilometers.estimated_diameter_max - a.diameter.kilometers.estimated_diameter_max;
    } else if (sortBy === 'Speed') {
      return b.closeApproach[0].relative_velocity.kilometers_per_second - a.closeApproach[0].relative_velocity.kilometers_per_second;
    } else if (sortBy === 'Proximity') {
      return a.closeApproach[0].miss_distance.kilometers - b.closeApproach[0].miss_distance.kilometers;
    } else return a - b;
  } )
};