const parseCurrent = data => {
  let asteroids = [];
  Object.values(data).forEach(array => {
    asteroids.push(...array);
  });

  return asteroids.map(
    ({
      name,
      id,
      nasa_jpl_url,
      absolute_magnitude_h,
      estimated_diameter,
      is_potentially_hazardous_asteroid,
      close_approach_data,
      orbital_data,
      is_sentry_object
    }) => ({
      name: name,
      id,
      url: nasa_jpl_url,
      magnitude: absolute_magnitude_h,
      diameter: estimated_diameter,
      hazardous: is_potentially_hazardous_asteroid,
      closeApproach: close_approach_data,
      orbitData: orbital_data,
      sentry: is_sentry_object
    })
  );
};

module.exports = parseCurrent;
