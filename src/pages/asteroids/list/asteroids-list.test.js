import React from 'react';
import { render } from '@testing-library/react';

import ConnectedComponent from '../../../utils/test-utils';
import { mockedState } from '../../../utils/test-utils/__mocks__/state-mock';
import configureStore from '../../../store';

import AsteroidsList from './asteroids-list';

let store;
describe('Asteroids list component', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display the list container and labels container', () => {
    const { getByTestId } = render(
      <ConnectedComponent store={store}>
        <AsteroidsList
          asteroids={mockedState.asteroids}
          onLabelSelected={() => {}}
        />
      </ConnectedComponent>
    );

    expect(getByTestId('asteroids-list__list-container')).toBeDefined();
    expect(getByTestId('asteroids-list__labels-container')).toBeDefined();
  });

  it('Should display as many asteroids as passed in props', () => {
    const { queryAllByTestId } = render(
      <ConnectedComponent store={store}>
        <AsteroidsList
          asteroids={mockedState.asteroids}
          onLabelSelected={() => {}}
        />
      </ConnectedComponent>
    );

    expect(queryAllByTestId('asteroid-list__item-container').length).toBe(2);
  });
});
