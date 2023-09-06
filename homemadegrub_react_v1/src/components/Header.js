import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between">
        <label className="">HomeMadeGrub</label>
        <div>
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/login">Login</Link>
        {/* Add conditional rendering here for Sign Up or Profile button */}
      </div>
    </div>
  );
}

export default Header;
