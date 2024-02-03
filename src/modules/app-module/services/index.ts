import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAllSpacex = createAsyncThunk(
  'spacex/list',
  async (_, {rejectWithValue, fulfillWithValue}) => {
    const res = await axios.get('https://api.spacexdata.com/v3/launches');
    if (res.status === 200) {
      return fulfillWithValue(res.data);
    }
    return rejectWithValue(null);
  },
);

const fetchDetalsSpacex = createAsyncThunk(
  'spacex/detail',
  async (id, {rejectWithValue, fulfillWithValue}) => {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
    if (res.status === 200) {
      return fulfillWithValue(res.data);
    }
    return rejectWithValue(null);
  },
);

export {fetchAllSpacex, fetchDetalsSpacex};
