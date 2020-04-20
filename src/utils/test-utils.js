import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const defaultHistory = createMemoryHistory();
const ConnectedComponent = ({ store, history = defaultHistory, children }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default ConnectedComponent;
