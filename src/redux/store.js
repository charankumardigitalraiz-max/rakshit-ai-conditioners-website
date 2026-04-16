import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import projectsReducer from './projectsSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    projects: projectsReducer,
  },
})
