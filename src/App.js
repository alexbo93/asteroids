import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/list">
            <h1>LIST</h1>
          </Route>
          <Route path="/asteroid/:id">
            <h1>DETAIL</h1>
          </Route>
          <Route path="/pod">
            <h1>PICTURE</h1>
          </Route>
          <Route path="/">
            <h1>HOME</h1>
          </Route>
        </Switch>
        {/*<Footer />*/}
        </div>
    </Router>
  );
}

export default App;
