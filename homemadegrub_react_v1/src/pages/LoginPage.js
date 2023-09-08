import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
        <h1>Login Here</h1>
        <ul>
          <li><Link to="/signup1">Client</Link></li>
          <li><Link to="/signup2">Chef</Link></li>
          <li><Link to="/signup3">Delivery personnel</Link></li>
        </ul>
    </div>
  );
}

export default LoginPage;