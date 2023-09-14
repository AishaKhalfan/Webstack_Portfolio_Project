import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './redux/authReducer';

import './index.css';
import App from './App';

const store = configureStore({
  reducer: authReducer,
  middleware: [...getDefaultMiddleware()],
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);