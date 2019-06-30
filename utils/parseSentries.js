const parseSentries = data => {
  const filtered = data.filter(item => +item.palermo_scale_ave > -5);
  const asteroids = filtered.map(asteroid => ({
    name: asteroid.designation,
    sentryId: asteroid.sentryId,
    spkId: asteroid.spkId,
    diameter: Math.round(asteroid.estimated_diameter * 1000),
    impacts: asteroid.potential_impacts,
    impactProb: ((asteroid.impact_probability * 10 ** 5) / 1000).toFixed(6),
    lastObserved: asteroid.last_obs,
    palermo: asteroid.palermo_scale_ave,
    yearMin: asteroid.year_range_min,
    yearMax: asteroid.year_range_max,
    orbitalUrl: asteroid.url_orbital_elements
  }));

  return asteroids;
};

module.exports = parseSentries;
