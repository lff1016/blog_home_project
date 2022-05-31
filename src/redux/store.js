import { configureStore } from '@reduxjs/toolkit';

import articleSlice from './features/articleSlice';
import categorySlice from './features/categorySlice';

export default configureStore({
  reducer: {
    articles: articleSlice,
    categories: categorySlice
  }
})

