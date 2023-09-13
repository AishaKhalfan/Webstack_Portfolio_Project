import React from "react";
import logo from '../images/logo.png'; 

function Logo() {
  return (
    <div className="flex flex-row justify-between">
        <img src={logo} alt="HomeMadeGrub" className="max-w-[250px] max-h-[100px]" />
      </div>
      );    
      }
export default Logo;