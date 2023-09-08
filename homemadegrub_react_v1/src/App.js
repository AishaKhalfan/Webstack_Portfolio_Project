import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { MainPage, LoginPage, OrderPage, SignUp1Page, SignUp2Page, SignUp3Page } from './pages';

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="h-screen">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup1" element={<SignUp1Page />} />
                <Route path="/signup2" element={<SignUp2Page />} />
                <Route path="/signup3" element={<SignUp3Page />} />
                <Route path="/order" element={<OrderPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
  );
}

export default App;
