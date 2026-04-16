import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 'daikin-ftl-3star',
      name: 'Daikin FTL 3-Star Fixed Speed',
      description: 'Reliable cooling for consistent environments. High-performance non-inverter technology.',
      category: 'Room AC',
      basePrice: 32500,
      image: '/products/daikin_ftl_3star_1776342800676.png',
      variants: [
        { type: '1.0 TR', price: 32500, model: 'FTL28U' },
        { type: '1.5 TR', price: 41200, model: 'FTL50U' },
        { type: '2.0 TR', price: 54800, model: 'FTL60U' }
      ]
    },
    {
      id: 'daikin-ftkl-3star-inverter',
      name: 'Daikin FTKL 3-Star Inverter',
      description: 'The Smart choice for energy efficiency and powerful cooling. Our best-selling model.',
      category: 'Room AC',
      basePrice: 36800,
      image: '/products/daikin_ftkl_best_seller_1776343022422.png',
      variants: [
        { type: '1.0 TR', price: 36800, model: 'FTKL28TV' },
        { type: '1.5 TR', price: 44500, model: 'FTKL50TV' },
        { type: '2.0 TR', price: 59200, model: 'FTKL60TV' }
      ]
    },
    {
      id: 'daikin-ftkg-5star-inverter',
      name: 'Daikin FTKG 5-Star Inverter',
      description: 'Premium efficiency with air purification. Ideal for health-conscious environments.',
      category: 'Room AC',
      basePrice: 48500,
      image: '/products/daikin_ftkg_premium_1776343081832.png',
      variants: [
        { type: '1.0 TR', price: 48500, model: 'FTKG28TV' },
        { type: '1.5 TR', price: 56900, model: 'FTKG50TV' }
      ]
    },
    {
      id: 'daikin-jtkj-5star-premium',
      name: 'Daikin JTKJ 5-Star Premium Inverter',
      description: 'The ultimate in climate luxury. Unmatched efficiency with high-fidelity air filtration.',
      category: 'Room AC',
      basePrice: 52400,
      image: '/products/daikin_jtkj_toptier_1776343163911.png',
      variants: [
        { type: '1.0 TR', price: 52400, model: 'JTKJ28TV' },
        { type: '1.5 TR', price: 62800, model: 'JTKJ50TV' }
      ]
    },
    {
      id: 'daikin-ftq-2star-inverter',
      name: 'Daikin FTQ 2-Star Inverter',
      description: 'Advanced inverter cooling at a value-driven price point for efficient everyday use.',
      category: 'Room AC',
      basePrice: 34200,
      image: '/products/daikin_ftq_2star_1776342731832.png',
      variants: [
        { type: '1.0 TR', price: 34200, model: 'FTQ28TV' },
        { type: '1.5 TR', price: 42100, model: 'FTQ50TV' },
        { type: '2.0 TR', price: 55400, model: 'FTQ60TV' }
      ]
    }
  ],
  filters: {
    category: 'All',
    tonnage: 'All'
  },
  status: 'idle'
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
  }
})

export const { setCategoryFilter, setTonnageFilter } = productSlice.actions
export default productSlice.reducer
