import { mockPod } from './pod-mock';
import {
  mockFormattedAsteroids,
  mockFormattedCustomDistanceAsteroids,
} from './asteroid-mock';

export const mockedState = {
  asteroids: mockFormattedAsteroids,
  pod: mockPod,
};

export const mockedDistanceCustomState = {
  asteroids: mockFormattedCustomDistanceAsteroids,
  pod: mockPod,
};
