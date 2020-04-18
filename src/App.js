import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Pod from './pages/picture-of-day';
import Home from './pages/home';
import Asteroids from './pages/asteroids';
import Asteroid from './pages/asteroid';
import NotFound from './pages/not-found';

import Header from './components/header';
import Footer from './components/footer';

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/asteroids">
            <Asteroids />
          </Route>
          <Route path="/asteroid/:id">
            <Asteroid />
          </Route>
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
}

export default App;
