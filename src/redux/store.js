import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import projectsReducer from './projectsSlice'
import testimonialsReducer from './testimonialsSlice'
import achievementsReducer from './achievementsSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    projects: projectsReducer,
    testimonials: testimonialsReducer,
    achievements: achievementsReducer,
  },
})
