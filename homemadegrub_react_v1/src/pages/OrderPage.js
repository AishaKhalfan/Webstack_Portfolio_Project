import React from 'react';
import { Routes, Route } from 'react-router-dom';

function OrderPage() {
  return (
    <div>
        <h1>Order Here</h1>
    </div>
  );
}
// Define route configuration for MainPage
function OrderPageRoutes() {
    return (
      <Routes>
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    );
  }

export default OrderPageRoutes;