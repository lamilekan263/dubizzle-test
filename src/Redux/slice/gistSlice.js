import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGistList, fetchGistForUser } from './request';


// create an initial State for store
const initialState = {
    gistList: [],
    loading: false,
    error: false,
};

// fetch all gist
export const fetchGist = createAsyncThunk(
    'fetchGist',
    async () => {
        const { data, status } = await fetchGistList();
        if (status === 200) {
            return {
                gistList: data,
            };
        } else {
            throw new Error('Error Fetching Gist');
        }

    },
);


// fecth gist based on user
export const fetchGistListForUser = createAsyncThunk(
    'filterNews',
    async (searchParams) => {
        const { data, status } = await fetchGistForUser(searchParams);
        if (status === 200) {
            return {
                gistList: data,
            };
        } else {
            throw new Error('Error Fetching Gist');
        }
    },
);


const gistSlice = createSlice({
    name: 'gistList',
    initialState,
    reducers: {
    },
    extraReducers (builder) {
        builder.addCase(fetchGist.pending, state => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(fetchGist.fulfilled, (state, { payload }) => {
            state.gistList = payload.gistList;
            state.loading = false;
        });
        builder.addCase(fetchGist.rejected, state => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(fetchGistListForUser.pending, state => {
            state.loading = true;
            state.error = undefined;
        });

        builder.addCase(fetchGistListForUser.fulfilled, (state, { payload }) => {
            state.gistList = payload.gistList;
            state.loading = false;
        });
        builder.addCase(fetchGistListForUser.rejected, state => {
            state.error = true;
            state.loading = false;
        });

    },
});

export default gistSlice.reducer;