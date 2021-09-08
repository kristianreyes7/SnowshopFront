import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  total: 0,
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state.cart.push(action.payload)
    },
    decrement: (state) => {
      state.total -= 1
    },
    incrementByAmount: (state, action) => {
      state.total += action.payload
    },
    reset: (state) => {
      state.total = 0
      state.cart.length = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
