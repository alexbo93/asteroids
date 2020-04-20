import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Pod from './pages/picture-of-day';
import Home from './pages/home';
import Asteroids from './pages/asteroids';
import Asteroid from './pages/asteroid';
import NotFound from './pages/not-found';

import Header from './components/header';
import Footer from './components/footer';

import './App.css';
import { getAsteroids } from './features/asteroids';
import { useDispatch } from 'react-redux';

const App = () => {
  console.log('DEFINE COMPONENT PROPTYPES!!');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsteroids());
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/asteroids">
            <Asteroids />
          </Route>
          <Route path="/asteroid/:id" component={Asteroid} />
          <Route path="/pod">
            <Pod />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
