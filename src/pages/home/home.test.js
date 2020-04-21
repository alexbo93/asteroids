import React from 'react';
import { render } from '@testing-library/react';

import ConnectedComponent from '../../utils/test-utils';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import Home from './home';
import configureStore from '../../store';

let store;
describe('Home Page component', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display title, paragraph and 2 links to list and apod section', () => {
    const { container } = render(
      <ConnectedComponent store={store}>
        <Home />
      </ConnectedComponent>
    );

    const title = container.getElementsByTagName('h1')[0];
    const links = container.getElementsByTagName('a');
    expect(container.getElementsByTagName('h1').length).toBe(1);
    expect(title.innerHTML).toEqual('NEO Earth Close Approaches');
    expect(container.getElementsByTagName('p').length).toBe(1);
    expect(links.length).toBe(2);
    expect(links[0].href).toContain('/asteroids');
    expect(links[1].href).toContain('/pod');
  });
});
