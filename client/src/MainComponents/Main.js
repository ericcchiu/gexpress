import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Stores from '../StoreComponent/Stores';
import Home from './Home';
import Departments from '../DepartmentsComponent/Departments';
import ShoppingList from '../ShoppingListComponent/ShoppingList';
import QuickReorder from '../QuickReorderComponent/QuickReorder';


/*
* The Main component renders the provided routes that matches. 
*/

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/stores' component={Stores} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/shoppinglist' component={ShoppingList} />
        <Route exact path='/quickreorder' component={QuickReorder} />


      </Switch>
    </main>
  );
}
export default Main;
