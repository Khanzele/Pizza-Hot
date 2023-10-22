import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './Slices/filter/filterSlice';
import cartSlice from './Slices/cart/cartSlice';
import pizzaSlice from './Slices/pizza/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});
