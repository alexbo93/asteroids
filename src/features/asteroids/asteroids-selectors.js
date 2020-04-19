export const selectAsteroids = (state) => state.asteroids;

export const selectAsteroid = (state, id) =>
  state &&
  state.asteroids &&
  state.asteroids.length &&
  state.asteroids.filter((asteroid) => asteroid.id === id)[0];
