import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchJSON } from '../services/api'

export const fetchAchievements = createAsyncThunk('achievements/fetchAchievements', async (_, thunkAPI) => {
    try {
        const response = await fetchJSON('/achievements?limit=100')
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

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAchievements.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchAchievements.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload.map((item, idx) => ({
                    ...item,
                    id: item._id || idx + 1
                }))
            })
            .addCase(fetchAchievements.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || action.error.message
            })
    }
})

export default achievementsSlice.reducer
