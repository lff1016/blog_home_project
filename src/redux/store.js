import { configureStore } from '@reduxjs/toolkit';

import articleSlice from './features/articleSlice';
import categorySlice from './features/categorySlice';
import commentSlice from './features/commentSlice';
import saySlice from './features/saySlice';

export default configureStore({
  reducer: {
    articles: articleSlice,
    categories: categorySlice,
    comments: commentSlice,
    says: saySlice
  }
})

