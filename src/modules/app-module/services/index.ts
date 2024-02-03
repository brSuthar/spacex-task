import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface AllType {
  key: string;
}

const fetchAllSpacex = createAsyncThunk<any, AllType>(
  'spacex/list',
  async (key, {rejectWithValue, fulfillWithValue}) => {
    const res = await axios.get(`https://api.spacexdata.com/v3/launches${key}`);
    if (res.status === 200) {
      return fulfillWithValue(res.data);
    }
    return rejectWithValue(null);
  },
);

interface Detail {
  id: any;
}

const fetchDetalsSpacex = createAsyncThunk<any, Detail>(
  'spacex/detail',
  async (id, {rejectWithValue, fulfillWithValue}) => {
    console.log('asdfjalskdjfalskdjf: ', id);
    const res = await axios.get(`https://api.spacexdata.com/v3/launches/${id}`);
    if (res.status === 200) {
      return fulfillWithValue(res.data);
    }
    return rejectWithValue(null);
  },
);

export {fetchAllSpacex, fetchDetalsSpacex};
