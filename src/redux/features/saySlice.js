import { createSlice } from '@reduxjs/toolkit';

export const SaySlice = createSlice({
  name: 'says',
  initialState: {
    says: []
  },
   reducers: {
    getSays: (state, { payload }) => {
      state.says = payload
    }
   }
})

export const {getSays} = SaySlice.actions

export default SaySlice.reducer