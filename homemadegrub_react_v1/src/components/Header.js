import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className="flex justify-between">
        <label className="">HomeMadeGrub</label>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/order">Order</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        {/* conditional rendering Sign Up or Profile button */}
        </div>
      </div>
  );
}

export default Header;
