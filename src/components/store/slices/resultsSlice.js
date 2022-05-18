import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchResults = createAsyncThunk('results/fetchResults', async (url) => {
    const response = await axios.get(url)
    return response.data
})

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        url: {
            base: 'https://www.googleapis.com/books/v1/volumes?q=',
            term: '',
            conector: '&startIndex=',
            index: 0,
            end: '&maxResults=10&filter=free-ebooks&key=AIzaSyDNjXYqYUkAsf7ur-XDGVRL6UFlWHfIZMQ',
        },
        totalItems: 0,
        current: [],
        favs: [],
        isLoading: false,
    },
    reducers: {
        setUrl: (state, action) => {
            state.url.term = action.payload;
        },
        addFavorite: (state) => {
            return state;
        },
    },
    extraReducers: {
        [fetchResults.pending]: (state) => {
            state.isLoading = true
        },
        [fetchResults.fulfilled]: (state, action) => {
            state.current = action.payload.items
            state.totalItems = action.payload.totalItems
            state.isLoading = false
        },
        [fetchResults.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { setUrl, addFavorite } = resultsSlice.actions

export default resultsSlice.reducer