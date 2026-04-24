import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJSON } from '../services/api'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchJSON('/products')
      return response.data
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const initialState = {
  items: [],
  filters: {
    category: 'All',
    tonnage: 'All'
  },
  status: 'idle',
  error: null
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload
    },
    setTonnageFilter: (state, action) => {
      state.filters.tonnage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export const { setCategoryFilter, setTonnageFilter } = productSlice.actions
export default productSlice.reducer
