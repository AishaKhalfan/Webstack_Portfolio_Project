import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
      <div className="bg-white p-4 rounded">
        <h1 className="text-2xl font-semibold mb-4">Welcome to HomeMadeGrub</h1>
        <h2>Please select your role</h2>
        <form>
          <div className="flex justify-between">
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              <Link to="/clientsignup">Client</Link>
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              <Link to="/chefsignup">Chef</Link>
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              <Link to="/deliverysignup">Delivery</Link>
            </button>
          </div>

          <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your Email" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                </div>
                <div class="mb-4">
                    <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
