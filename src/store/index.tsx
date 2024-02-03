import {configureStore} from '@reduxjs/toolkit';
import spacex from '../modules/app-module/reducer/index';

const store = configureStore({
  reducer: spacex,
});

export default store;
