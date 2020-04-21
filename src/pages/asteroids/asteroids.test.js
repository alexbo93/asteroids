import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ConnectedContainer from '../../utils/test-utils';
import {
  mockedState,
  mockedDistanceCustomState,
} from '../../utils/test-utils/__mocks__/state-mock';
import Asteroids from './asteroids';
import configureStore from '../../store';
import { selectAsteroids } from '../../features/asteroids';
import { LUNAR_DISTANCE } from '../../constants';

let store;
describe('Asteroids list page', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display an asteroids main container, filters container and list container', () => {
    const { getByTestId } = render(
      <ConnectedContainer store={store}>
        <Asteroids />
      </ConnectedContainer>
    );

    expect(getByTestId('asteroids-list__container')).toBeDefined();
    expect(getByTestId('asteroids-list__filters-container')).toBeDefined();
    expect(getByTestId('asteroids-list__list-container')).toBeDefined();
  });

  it('Should display as many asteroid rows as asteroids in store', () => {
    const { queryAllByTestId } = render(
      <ConnectedContainer store={store}>
        <Asteroids />
      </ConnectedContainer>
    );

    expect(queryAllByTestId('asteroid-list__item-container').length).toEqual(
      selectAsteroids(mockedState).length
    );
  });

  it('Should not show any item and display not found message in the list if there are no asteroids in store', () => {
    store = configureStore();

    const { queryAllByTestId, container } = render(
      <ConnectedContainer store={store}>
        <Asteroids />
      </ConnectedContainer>
    );

    expect(queryAllByTestId('asteroid-list__item-container').length).toBe(0);
    expect(container.innerHTML).toContain('There are no asteroids');
  });

  it('Should update the list when selecting hazardous asteroids checkbox', () => {
    const { queryAllByTestId, getByTestId } = render(
      <ConnectedContainer store={store}>
        <Asteroids />
      </ConnectedContainer>
    );

    const hazardousCheck = getByTestId('filter-hazardous');
    fireEvent.change(hazardousCheck);

    setTimeout(() => {
      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(0);
    }, 2000);
  }, 3000);

  describe('Velocity Ordering by clickin on label', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
    });
    it('Fastest asteroid should be first when clicking on velocity label order filter', () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const velocityLabel = getByTestId('label-velocity');
      fireEvent.click(velocityLabel);

      setTimeout(() => {
        const fastestAsteroid = queryAllByTestId(
          'asteroid-list__item-container'
        )[0];
        expect(fastestAsteroid.innerHTML).toContain(
          mockedState.asteroids[0].name
        );
        expect(fastestAsteroid.innerHTML).not.toContain(
          mockedState.asteroids[1].name
        );
      }, 2000);
    }, 3000);

    it('Fastest asteroid should be last when clicking twice (ascendant order) on velocity label order filter', () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const velocityLabel = getByTestId('label-velocity');
      fireEvent.click(velocityLabel);
      fireEvent.click(velocityLabel);

      setTimeout(() => {
        // Fastest asteroid has been placed first in mocks
        const fastestAsteroid = queryAllByTestId(
          'asteroid-list__item-container'
        )[0];
        expect(fastestAsteroid.innerHTML).not.toContain(
          mockedState.asteroids[0].name
        );
        expect(fastestAsteroid.innerHTML).toContain(
          mockedState.asteroids[1].name
        );
      }, 2000);
    }, 3000);
  });

  describe('Name Ordering by clickin on label', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
    });
    it('Should order alphabetically ascendant when clicking on name label', () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const nameLabel = getByTestId('label-name');
      fireEvent.click(nameLabel);

      const alphaFirstAsteroid = queryAllByTestId(
        'asteroid-list__item-container'
      )[0];
      expect(alphaFirstAsteroid.innerHTML).toContain(
        mockedState.asteroids[0].name
      );
      expect(alphaFirstAsteroid.innerHTML).not.toContain(
        mockedState.asteroids[1].name
      );
    }, 3000);

    it('Should order alphabetically descendant when clicking on name twice label', async () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const nameLabel = getByTestId('label-name');
      fireEvent.click(nameLabel);
      fireEvent.click(nameLabel);

      const alphaFirstAsteroid = queryAllByTestId(
        'asteroid-list__item-container'
      )[0];
      expect(alphaFirstAsteroid.innerHTML).not.toContain(
        mockedState.asteroids[0].name
      );
      expect(alphaFirstAsteroid.innerHTML).toContain(
        mockedState.asteroids[1].name
      );
    }, 3000);
  });

  describe('Distance to earth Ordering by clickin on label', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
    });
    it('Closer asteroid should be last when clicking twice (ascendant order) on distance label order filter', () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const distanceLabel = getByTestId('label-distance');
      fireEvent.click(distanceLabel);

      const closerAsteroid = queryAllByTestId(
        'asteroid-list__item-container'
      )[0];
      expect(closerAsteroid.innerHTML).toContain(mockedState.asteroids[0].name);
      expect(closerAsteroid.innerHTML).not.toContain(
        mockedState.asteroids[1].name
      );
    }, 3000);

    it('Closer asteroid should be first when clicking twice (ascendant order) on distance label order filter', async () => {
      const { queryAllByTestId, getByTestId, container } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const distanceLabel = getByTestId('label-distance');
      await fireEvent.click(distanceLabel);
      await fireEvent.click(distanceLabel);

      const closerAsteroid = queryAllByTestId(
        'asteroid-list__item-container'
      )[0];
      expect(closerAsteroid.innerHTML).not.toContain(
        mockedState.asteroids[0].name
      );
      expect(closerAsteroid.innerHTML).toContain(mockedState.asteroids[1].name);
    }, 3000);
  });

  describe('Filtering by velocity', () => {
    beforeEach(() => {
      store = configureStore(mockedState);
    });

    it('Should display only one option if 10 km/s is selected as threshold filter', () => {
      const { queryAllByTestId, getByTestId } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const velocitySelect = getByTestId('filter-velocity');
      fireEvent.change(velocitySelect, { target: { value: 10 } });

      const asteroid = queryAllByTestId('asteroid-list__item-container')[0];
      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(1);
      // Second asteroid in the list is the one matching with filtering conditions
      expect(asteroid.innerHTML).toContain(mockedState.asteroids[1].name);
    });

    it('Should not display asteroids if minimum of 5 km/s is selected as threshold filter', () => {
      const { queryAllByTestId, getByTestId } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const velocitySelect = getByTestId('filter-velocity');
      fireEvent.change(velocitySelect, { target: { value: 5 } });

      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(0);
    });
  });

  describe('Filtering by distance', () => {
    beforeEach(() => {
      store = configureStore(mockedDistanceCustomState);
    });

    it('Should display only one option if < Lunar distance (~300000Km) is selected as threshold filter', () => {
      const { queryAllByTestId, getByTestId } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const distanceSelect = getByTestId('filter-distance');
      fireEvent.change(distanceSelect, { target: { value: LUNAR_DISTANCE } });

      const asteroid = queryAllByTestId('asteroid-list__item-container')[0];
      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(1);
      // Second asteroid in the list is the one matching with distance filtering conditions
      expect(asteroid.innerHTML).toContain(mockedState.asteroids[1].name);
    });

    it('Should display both asteroids if a value is selected and empty value is selected afterwards', () => {
      const { queryAllByTestId, getByTestId } = render(
        <ConnectedContainer store={store}>
          <Asteroids />
        </ConnectedContainer>
      );

      const distanceSelect = getByTestId('filter-distance');
      fireEvent.change(distanceSelect, {
        target: { value: LUNAR_DISTANCE * 5 },
      });

      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(1);

      fireEvent.change(distanceSelect, { target: { value: '' } });
      expect(queryAllByTestId('asteroid-list__item-container').length).toBe(2);
    });
  });
});
