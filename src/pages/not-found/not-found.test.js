import React from 'react';
import { render } from '@testing-library/react';

import ConnectedComponent from '../../utils/test-utils';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import NotFound from './not-found';
import configureStore from '../../store';

let store;
describe('Not Found Page component', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display title, and link to home', () => {
    const { container } = render(
      <ConnectedComponent store={store}>
        <NotFound />
      </ConnectedComponent>
    );

    const titles = container.getElementsByTagName('h1');
    const links = container.getElementsByTagName('a');
    expect(titles.length).toBe(1);
    expect(links.length).toBe(1);
    expect(titles[0].innerHTML).toEqual(
      'The Page you are looking for is not found'
    );
    expect(links[0].href).toContain('/');
  });
});
