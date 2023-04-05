import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import bookmarkSlice from './slice/bookmarkSlice';
import newsSlice from './slice/newsSlice';

const rootReducer = combineReducers({
    newsList: newsSlice,
    auth: authSlice,
    bookmarks: bookmarkSlice,
});



const store = configureStore({
    reducer: rootReducer,
});

export default store;
