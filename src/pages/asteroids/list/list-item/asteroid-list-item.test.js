import React from 'react';
import { render } from '@testing-library/react';

import ConnectedComponent from '../../../../utils/test-utils';
import { mockedState } from '../../../../utils/test-utils/__mocks__/state-mock';
import AsteroidsListItem from './asteroids-list-item';
import configureStore from '../../../../store';
import { getRounded } from '../../../../utils/number-utils';

const mockedAsteroid = mockedState.asteroids[0];
let store;
describe('Asteroid item in asteroids list component', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display the item container', () => {
    const { getByTestId } = render(
      <ConnectedComponent store={store}>
        <AsteroidsListItem asteroid={mockedAsteroid} />
      </ConnectedComponent>
    );

    expect(getByTestId('asteroid-list__item-container')).toBeDefined();
  });

  it('Should display the information related to the asteroid including the link', () => {
    const { getByTestId } = render(
      <ConnectedComponent store={store}>
        <AsteroidsListItem asteroid={mockedAsteroid} />
      </ConnectedComponent>
    );

    expect(getByTestId('asteroid-list__item-container')).toBeDefined();
    expect(getByTestId('asteroid-name').innerHTML).toEqual('Asteroid1');
    expect(getByTestId('asteroid-distance').innerHTML).toContain(
      getRounded(mockedAsteroid.miss_distance)
    );
    expect(getByTestId('asteroid-velocity').innerHTML).toContain(
      getRounded(mockedAsteroid.velocity)
    );
    expect(
      getByTestId('asteroid-hazardous').getElementsByTagName('i').length
    ).toBe(0);
    expect(getByTestId('asteroid-link').href).toContain(
      `/asteroid/${mockedAsteroid.id}`
    );
  });

  it('Should display an icon if the asteroid is potentially hazardous', () => {
    const hazardousAsteroid = { ...mockedAsteroid, is_hazardous: true };
    const { getByTestId } = render(
      <ConnectedComponent store={store}>
        <AsteroidsListItem asteroid={hazardousAsteroid} />
      </ConnectedComponent>
    );

    expect(
      getByTestId('asteroid-hazardous').getElementsByTagName('i').length
    ).toBe(1);
  });
});
