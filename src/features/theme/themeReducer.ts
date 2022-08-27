import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ThemeState {
  theme: string;
  width: number;
}

const initialState: ThemeState = {
  theme: 'light',
  width: 640,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: { theme: string; }, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setWidth: (state: { width: number }, action: PayloadAction<number>) => {
      state.width = action.payload;
    }
  },

});

export const { setTheme, setWidth } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;
export const selectWidth = (state: RootState) => state.theme.width;

export default themeSlice.reducer;