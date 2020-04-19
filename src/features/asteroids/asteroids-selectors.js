export const selectAsteroids = (state) => state.asteroids;

export const selectAsteroid = (state, id) => {
  console.log('id: ', id);
  console.log('state: ', state.asteroids);
  const cosa =
    state &&
    state.asteroids &&
    state.asteroids.length &&
    state.asteroids.filter((asteroid) => asteroid.id === id)[0];
  console.log(
    'cosa: ',
    state.asteroids.filter((asteroid) => asteroid.id === id)
  );
  return cosa;
};
// state &&
// state.asteroids &&
// state.asteroids.length &&
// state.asteroids.filter((asteroid) => asteroid.id === id)[0];
