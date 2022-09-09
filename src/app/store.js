import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './ThemeProviderRedux';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  devTools: true,
});

export default store;
