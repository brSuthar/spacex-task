import {createSlice} from '@reduxjs/toolkit';
import {fetchAllSpacex, fetchDetalsSpacex} from '../services';

const initialState = {
  list: [],
  realList: [],
  detail: null,
  loading: false,
  searchText: '',
  filter: [
    {id: 1, title: 'All', key: '', selected: true},
    {id: 2, title: 'Past', key: '/past', selected: false},
    {id: 3, title: 'Upcoming', key: '/upcoming', selected: false},
    {id: 4, title: 'Next', key: '/next', selected: false},
  ],
};

const spacex = createSlice({
  name: 'spacex',
  initialState: initialState,
  reducers: {
    unmount: state => {
      state.detail = null;
    },
    updateFilter: (state, action) => {
      state.filter = state.filter.map(item => {
        console.log('Actiaonfasdf ', action.payload);
        return {
          ...item,
          selected: item.id === action.payload ? true : false,
        };
      });
    },
    searchFilter: (state, action) => {
      if (action.payload) {
        state.searchText = action.payload;
        state.list = state.realList.filter((item: any) => {
          const text = action.payload.toLowerCase();
          return (
            item?.rocket?.rocket_name.toLowerCase().includes(text) ||
            item?.mission_name.toLowerCase().includes(text) ||
            item?.flight_number === action.payload
          );
        });
      } else {
        state.list = state.realList;
        state.searchText = action.payload;
      }
    },
    clearFilter: state => {
      state.list = state.realList;
      state.searchText = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllSpacex.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAllSpacex.fulfilled, (state, action) => {
      state.loading = false;
      state.realList = action.payload;
      if (state.searchText && action.payload?.length > 0) {
        state.list = action.payload.filter((item: any) => {
          const text = state.searchText.toLowerCase();
          return (
            item?.rocket?.rocket_name.toLowerCase().includes(text) ||
            item?.mission_name.toLowerCase().includes(text) ||
            item?.flight_number === state.searchText
          );
        });
      } else {
        state.list = action.payload;
        state.searchText = '';
      }
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
export const {unmount, updateFilter, searchFilter, clearFilter} =
  spacex.actions;
