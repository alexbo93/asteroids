export const SET_ASTEROIDS_SUCCESS = 'SET_ASTEROIDS_SUCCESS';
export const GET_ASTEROIDS = 'GET_ASTEROIDS';

export const setAsteroidsSuccess = (asteroids) => ({
  type: SET_ASTEROIDS_SUCCESS,
  payload: asteroids,
});

export const getAsteroids = () => ({
  type: GET_ASTEROIDS,
});
