import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'; 

function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div >
        <Link to="/">
        <img src={logo} alt="HomeMadeGrub" className="max-w-[250px] max-h-[100px]" />
        </Link>
      </div>
          <ul>
            <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
              <Link to="/order">Order</Link>
            </li>
            <li className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out float-right">
              <Link to="/login">Login</Link>
            </li>
          </ul>
    </div>
  );
}

export default Header;
