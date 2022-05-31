import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'articles', // 命名空间：调用 action 时会默认设置为 action 的前缀
  initialState: {
    articles: []
  }, // 初始值
  reducers: {
    getArticles: (state, {payload}) => {
      state.articles = payload
    }
  }
})

export const {getArticles} = articleSlice.actions

export default articleSlice.reducer