import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async(params) => {
    const { categoryChange, sortBy, checkerIncludes, pageSelectorCount, searchParams } = params;
    const { data } = await axios.get(
        `https://64607fc3fe8d6fb29e31cd6d.mockapi.io/items?${'category=' + categoryChange}${sortBy}${'&order=' + checkerIncludes}&page=${pageSelectorCount}&search='${searchParams}'&limit=8`,
    ) 
    return data;
});

const initialState = {
    items: [],
    status: 'loading',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchPizzas.pending](state) {
            state.items = [];
            state.status = 'loading';
        },
        [fetchPizzas.fulfilled](state, action) {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchPizzas.rejected](state, action) {
            state.items = [];
            state.status = 'error';
        },
    }
});

export default pizzaSlice.reducer;