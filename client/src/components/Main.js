import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Stores from '../StoreComponent/Stores';
import Home from './Home';
/*
* The Main component renders the provided routes that matches. 
*/

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='stores' component={Stores} />
      </Switch>
    </main>
  );
}
export default Main;
