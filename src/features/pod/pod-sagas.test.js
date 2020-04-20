import { getPod } from './pod-actions';
import configureStore from '../../store';
import { mockPod } from '../../utils/test-utils/__mocks__/pod-mock';
import { selectPod } from './pod-selectors';

jest.mock('../../utils/api-utils.js', () => (apiString) =>
  new Promise((resolve) => resolve(mockPod))
);
let store;

describe('Pods sagas', () => {
  beforeEach(() => {
    store = configureStore();
  });
  it('Should fetch and store results from pod api call with the proper format', async () => {
    await store.dispatch(getPod());

    const pod = selectPod(store.getState());
    expect(pod).toEqual(mockPod);
  });
});
