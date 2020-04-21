import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';

import ConnectedContainer from '../../utils/test-utils';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import Asteroid from './asteroid';
import configureStore from '../../store';

let store;
describe('Asteroid detail page', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display an asteroid', () => {
    const { getByTestId, container } = render(
      <ConnectedContainer store={store}>
        <Asteroid match={{ params: { id: '2088959' } }} />
      </ConnectedContainer>
    );

    expect(getByTestId('asteroid-container')).toBeDefined();
    expect(getByTestId('asteroid-distance')).toBeDefined();
    expect(getByTestId('asteroid-velocity')).toBeDefined();
    expect(getByTestId('asteroid-orbit')).toBeDefined();
    expect(getByTestId('asteroid-date')).toBeDefined();
    expect(getByTestId('asteroid-additional')).toBeDefined();
  });

  it('Should NOT display an asteroid if id in params does not exist', () => {
    const { queryAllByTestId, getByTestId } = render(
      <ConnectedContainer store={store}>
        <Asteroid match={{ params: { id: '20' } }} />
      </ConnectedContainer>
    );

    expect(getByTestId('asteroid-not-found')).toBeDefined();
    expect(queryAllByTestId('asteroid-distance').length).toBe(0);
    expect(queryAllByTestId('asteroid-velocity').length).toBe(0);
    expect(queryAllByTestId('asteroid-orbit').length).toBe(0);
    expect(queryAllByTestId('asteroid-date').length).toBe(0);
    expect(queryAllByTestId('asteroid-additional').length).toBe(0);
  });

  it('Should NOT display an asteroid if there are no asteroids in store', () => {
    store = configureStore();
    const { queryAllByTestId, getByTestId } = render(
      <ConnectedContainer store={store}>
        <Asteroid match={{ params: { id: '2088959' } }} />
      </ConnectedContainer>
    );

    expect(getByTestId('asteroid-not-found')).toBeDefined();
    expect(queryAllByTestId('asteroid-distance').length).toBe(0);
    expect(queryAllByTestId('asteroid-velocity').length).toBe(0);
    expect(queryAllByTestId('asteroid-orbit').length).toBe(0);
    expect(queryAllByTestId('asteroid-date').length).toBe(0);
    expect(queryAllByTestId('asteroid-additional').length).toBe(0);
  });
});
