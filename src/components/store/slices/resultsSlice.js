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
        currentPage: 0,
        current: [],
        favs: [],
        isLoading: false,
    },
    reducers: {
        setUrl: (state, action) => {
            state.url.term = action.payload;
        },
        setIndex: (state, action) => {
            if (action.payload === 'next') {
                state.url.index += 10
            }
            if (action.payload === 'prev') {
                state.url.index -= 10
            }
            if (action.payload === 'clear') {
                state.url.index = 0
            }
        },
        setCurrentPage: (state, action) => {
            if (action.payload === 'next') state.currentPage += 1
            if (action.payload === 'prev') state.currentPage -= 1
            if (action.payload === 'clear') state.currentPage = 1
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
export const { setUrl, setIndex, setCurrentPage, addFavorite } = resultsSlice.actions

export default resultsSlice.reducer