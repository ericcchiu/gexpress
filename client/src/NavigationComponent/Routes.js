import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Stores from '../StoreComponent/Stores';

const Routes = () => {
  return (
    <Router>
      <div className='Routing'>
        <Route path='/stores' component={Stores} />
      </div>
    </Router>
  );
}

export default Routes; 
