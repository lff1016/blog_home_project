import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getCategories: (state, {payload}) => {
      console.log('state', state);
      state = payload
    }
  }
})

export const { getCategories } = categorySlice.actions

export default categorySlice.reducer