import { configureStore, combineReducers } from 'redux';
import authReducer from './authReducer'; // authentication reducer
import cartReducer from './cartReducer'; // cart reducer

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  });

export default store;
