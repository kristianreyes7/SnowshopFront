import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './shoppingCartReducer'

export const store = configureStore({
  reducer: {
      shoppingCart: shoppingCartReducer
  },
})

export default store