import React from 'react';
import { Routes, Route } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
        <h1>Login Here</h1>
    </div>
  );
}
// Define route configuration for MainPage
function LoginPageRoutes() {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }

export default LoginPageRoutes;