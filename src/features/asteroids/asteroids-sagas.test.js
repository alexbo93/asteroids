import { getAsteroids } from './asteroids-actions';
import configureStore from '../../store';
import {
  mockAsteroid,
  mockFormattedAsteroids,
} from '../../utils/test-utils/__mocks__/asteroid-mock';
import { selectAsteroids } from './asteroids-selectors';

jest.mock('../../utils/api-utils.js', () => (apiString) =>
  new Promise((resolve) => resolve(mockAsteroid))
);
let store;

describe('Asteroids sagas', () => {
  beforeEach(() => {
    store = configureStore();
  });
  it('Should fetch and store results from asteroids api call with the proper format', async () => {
    await store.dispatch(getAsteroids());

    const asteroids = selectAsteroids(store.getState());
    expect(asteroids).toEqual(mockFormattedAsteroids);
  });
});
