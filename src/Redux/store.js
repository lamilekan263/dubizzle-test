import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gistSlice from './slice/gistSlice';


// rootReducer
const rootReducer = combineReducers({
    gistList: gistSlice
});


// store
const store = configureStore({
    reducer: rootReducer,
});

export default store;
