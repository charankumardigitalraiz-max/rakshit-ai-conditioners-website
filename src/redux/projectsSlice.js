import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJSON } from '../services/api'

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async (_, thunkAPI) => {
  try {
    const response = await fetchJSON('/projects?limit=100')
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

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error.message
      })
  }
})

export default projectsSlice.reducer
