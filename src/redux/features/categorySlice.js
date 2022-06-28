import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: []
  },
  reducers: {
    getCategories: (state, {payload}) => {
      state.categories = payload
    }
  }
})

export const { getCategories } = categorySlice.actions

export default categorySlice.reducer