import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: []
  },
  reducers: {
    getComments: (state, {payload}) => {
      state.comments = payload
    }
  }
})

export const {getComments} = commentSlice.actions

export default commentSlice.reducer