import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { MainPage, LoginPage, OrderPage, SignUpChefPage, SignUpClientPage, SignUpDeliveryPage, AppContainerPage } from './pages';

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <div className="px-0 h-[calc(100vh-72px)] flex xl:flex-row flex-col-reverse">
            <div className="h-screen">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/chefsignup" element={<SignUpChefPage />} />
                <Route path="/clientsignup" element={<SignUpClientPage />} />
                <Route path="/deliverysignup" element={<SignUpDeliveryPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/signup" element={<AppContainerPage /> } />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
  );
}

export default App;
