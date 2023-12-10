import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../api/getProducts'

//async thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return getProducts();
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default productsSlice;

// export const { incremented, decremented } = productsSlice.actions
