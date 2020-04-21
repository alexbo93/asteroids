import React from 'react';
import { useDispatch } from 'react-redux';
import { render } from '@testing-library/react';

import ConnectedComponent from './utils/test-utils';
import { mockedState } from './utils/test-utils/__mocks__/state-mock';
import App from './app';
import configureStore from './store';

let store;

describe('App Main component', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });
  it('Should display the main container', () => {
    const { container } = render(
      <ConnectedComponent store={store}>
        <App />
      </ConnectedComponent>
    );

    expect(container.getElementsByClassName('App').length).toBe(1);
  });
});
