import { configureStore, combineReducers } from 'redux';
import authReducer from './authReducer'; // Your authentication reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  });

export default store;
