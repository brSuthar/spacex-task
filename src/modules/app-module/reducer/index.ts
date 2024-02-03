import {createSlice} from '@reduxjs/toolkit';
import {fetchAllSpacex, fetchDetalsSpacex} from '../services';

const initialState = {
  list: [],
  detail: {},
  loading: false,
};

const spacex = createSlice({
  name: 'spacex',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllSpacex.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAllSpacex.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchAllSpacex.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fetchDetalsSpacex.fulfilled, (state, action) => {
      state.detail = action.payload;
    });
  },
});

export default spacex.reducer;
