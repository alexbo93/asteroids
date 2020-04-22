import React from 'react';
import { render } from '@testing-library/react';

import ConnectedContainer from '../../utils/test-utils';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import Pod from './picture-of-day';
import configureStore from '../../store';

let store;
describe('Picture of the Day page', () => {
  it('Should display picture of the day container and proper structure', () => {
    store = configureStore(mockedState);
    const { getByTestId, container } = render(
      <ConnectedContainer store={store}>
        <Pod />
      </ConnectedContainer>
    );

    const paragraphs = container.getElementsByTagName('p');
    const titles = container.getElementsByTagName('h1');
    const links = container.getElementsByTagName('a');
    expect(getByTestId('apod-container')).toBeDefined();
    expect(getByTestId('apod-image__container')).toBeDefined();
    expect(paragraphs.length).toBe(4);
    expect(titles.length).toBe(1);
    expect(links.length).toBe(0);
  });

  it('Should NOT display an image but an information container if media type is not an image', () => {
    const customStateWithVideoPod = {
      ...mockedState,
      ...{ pod: { ...mockedState.pod, media_type: 'video' } },
    };
    store = configureStore(customStateWithVideoPod);
    const { container } = render(
      <ConnectedContainer store={store}>
        <Pod />
      </ConnectedContainer>
    );

    setTimeout(() => {
      const img = container.getElementsByTagName('img');
      const links = container.getElementsByTagName('a');
      expect(img.length).toBe(0);
      expect(links.length).toBe(1);
      expect(links[0].innerHTML).toContain(customStateWithVideoPod.pod.url);
    }, 2000);
  });
});
