import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    // --- ROOM AC ---
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
    },

    // --- COMMERCIAL AC ---
    {
      id: 'daikin-vrv-x-commercial',
      name: 'Daikin VRV X System',
      description: 'State-of-the-art Variable Refrigerant Volume technology for commercial buildings. High efficiency and zoning control.',
      category: 'Commercial AC',
      basePrice: 150000,
      hasPlaceholderImage: true,
      placeholderText: 'VRV SYSTEM',
      variants: [
        { type: 'Setup A', price: 250000, model: 'VRV-X Outdoor' },
        { type: 'Setup B', price: 450000, model: 'VRV-X High Capacity' }
      ]
    },
    {
      id: 'daikin-cassette-ac',
      name: 'Round Flow Cassette',
      description: '360° airflow for optimal temperature distribution in retail and open office spaces.',
      category: 'Commercial AC',
      basePrice: 65000,
      hasPlaceholderImage: true,
      placeholderText: 'CASSETTE UNIT',
      variants: [
        { type: '2.0 TR', price: 65000, model: 'FCA60' },
        { type: '3.0 TR', price: 85000, model: 'FCA100' },
        { type: '4.0 TR', price: 110000, model: 'FCA125' }
      ]
    },
    {
      id: 'daikin-ductable-ac',
      name: 'Concealed Ductable Split',
      description: 'High static pressure ductable units (1.5TR to 50TR) perfect for seamless aesthetic integration.',
      category: 'Commercial AC',
      basePrice: 75000,
      hasPlaceholderImage: true,
      placeholderText: 'DUCTABLE UNIT',
      variants: [
        { type: '4.0 TR', price: 95000, model: 'FDM125' },
        { type: '8.5 TR', price: 175000, model: 'FDM250' }
      ]
    },

    // --- CENTRAL AC ---
    {
      id: 'water-cooled-chiller',
      name: 'Water Cooled Centrifugal Chiller',
      description: 'Massive capacity cooling for large infrastructure projects. Unmatched COP and reliability.',
      category: 'Central AC',
      basePrice: 1500000,
      hasPlaceholderImage: true,
      placeholderText: 'CHILLER PLANT',
      variants: [
        { type: '300 TR', price: 1500000, model: 'DWC-300' },
        { type: '500 TR', price: 2200000, model: 'DWC-500' },
        { type: '1000 TR', price: 4000000, model: 'DWC-1000' }
      ]
    },
    {
      id: 'air-cooled-screw-chiller',
      name: 'Air Cooled Screw Chiller',
      description: 'Robust and easy-to-maintain central cooling without the need for cooling towers.',
      category: 'Central AC',
      basePrice: 1200000,
      hasPlaceholderImage: true,
      placeholderText: 'SCREW CHILLER',
      variants: [
        { type: '150 TR', price: 1200000, model: 'EWAD-150' },
        { type: '250 TR', price: 1800000, model: 'EWAD-250' }
      ]
    },

    // --- VENTILATION ---
    {
      id: 'ventilation-inline-fan',
      name: 'Heavy Duty Inline Fan',
      description: 'Compact acoustic inline fans for toilet and small-room exhaust applications.',
      category: 'Ventilation',
      basePrice: 12000,
      hasPlaceholderImage: true,
      placeholderText: 'INLINE FAN',
      variants: [
        { type: 'Standard', price: 12000, model: 'IL-150' },
        { type: 'High CFM', price: 18000, model: 'IL-250' }
      ]
    },
    {
      id: 'ventilation-axial-fan',
      name: 'Basement Axial Fan',
      description: 'High volume air extraction and CO purging system for basement parking areas.',
      category: 'Ventilation',
      basePrice: 45000,
      hasPlaceholderImage: true,
      placeholderText: 'AXIAL FAN',
      variants: [
        { type: '600mm', price: 45000, model: 'AX-60' },
        { type: '900mm', price: 75000, model: 'AX-90' }
      ]
    },
    {
      id: 'ventilation-centrifugal',
      name: 'Kitchen Centrifugal Exhaust',
      description: 'Industrial backward curved centrifugal fans designed to handle grease and high temperatures.',
      category: 'Ventilation',
      basePrice: 55000,
      hasPlaceholderImage: true,
      placeholderText: 'CENTRIFUGAL',
      variants: [
        { type: 'SISW', price: 55000, model: 'CF-200' },
        { type: 'DIDW', price: 85000, model: 'CF-400' }
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
