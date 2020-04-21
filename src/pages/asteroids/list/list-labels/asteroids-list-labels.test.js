import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AsteroidsListLabels from './asteroids-list-labels';

const mockedFn = jest.fn();

describe('Asteroids list labels component', () => {
  it('Should display 4 labels with proper naming', () => {
    const { getByTestId, container } = render(
      <AsteroidsListLabels onLabelSelected={mockedFn} />
    );

    expect(getByTestId('label-name')).toBeDefined();
    expect(getByTestId('label-velocity')).toBeDefined();
    expect(getByTestId('label-distance')).toBeDefined();
    expect(container.innerHTML).toContain('Hazardous?');
  });

  it('Should call onLabelSelected whether Name, Distance or Velocity are clicked', () => {
    const { getByTestId, container } = render(
      <AsteroidsListLabels onLabelSelected={mockedFn} />
    );

    const nameLabel = getByTestId('label-name');
    const distanceLabel = getByTestId('label-distance');
    const velocityLabel = getByTestId('label-velocity');

    fireEvent.click(nameLabel);
    fireEvent.click(distanceLabel);
    fireEvent.click(velocityLabel);

    expect(mockedFn).toHaveBeenCalledTimes(3);
  });
});
