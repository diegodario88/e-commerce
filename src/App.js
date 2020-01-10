import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const hatsPage = () => (
  <div>
    hello from hatsPage
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop/hats' component={hatsPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
