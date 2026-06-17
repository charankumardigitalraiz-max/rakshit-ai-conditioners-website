import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJSON } from '../services/api'

export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async (_, thunkAPI) => {
  try {
    const response = await fetchJSON('/home')
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const initialState = {
  products: [],
  projects: [],
  achievements: [],
  testimonials: [],
  status: 'idle',
  error: null,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload.products || []
        state.projects = action.payload.projects || []
        state.achievements = (action.payload.achievements || []).map((item, idx) => ({
          ...item,
          id: item._id || idx + 1,
        }))
        state.testimonials = (action.payload.testimonials || []).map((item, idx) => ({
          ...item,
          id: item._id || idx + 1,
        }))
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error?.message
      })
  },
})

export default homeSlice.reducer
