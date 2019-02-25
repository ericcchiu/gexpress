import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <div>
      <div>
        <ul>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <li>
            <Link to="/shoppinglist">Shopping List</Link>
          </li>
          <li>
            <Link to="/quickreorder">Quick Reorder</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar; 