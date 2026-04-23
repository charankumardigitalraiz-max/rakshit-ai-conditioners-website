import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJSON } from '../services/api'

export const fetchTestimonials = createAsyncThunk('testimonials/fetchTestimonials', async (_, thunkAPI) => {
  try {
    const response = await fetchJSON('/testimonials?limit=100')
    return response.data || []
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const initialState = {
  items: [],
  status: 'idle',
  error: null
}

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.map((item, idx) => ({
          ...item,
          id: item._id || idx + 1
        }))
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error.message
      })
  }
})

export default testimonialsSlice.reducer
