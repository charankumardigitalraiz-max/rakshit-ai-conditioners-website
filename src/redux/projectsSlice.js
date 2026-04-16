import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      title: 'IRIS by Raghava',
      details: 'Total 3 Towers, Each Tower consists of 45 Floors, Each floor 4 flats – Total 540 flats',
      location: 'Hyderabad',
      category: 'Residential',
      image: '/projects/iris.png'
    },
    {
      id: 2,
      title: 'NEXGEN INFRA',
      details: 'Total 44 premium villas with centralized HVAC design and installation.',
      location: 'Vijayawada',
      category: 'Residential',
      image: '/projects/nexgen-infra.png'
    },
    {
      id: 3,
      title: 'Montessori Olympus School',
      details: 'Precision cooling systems for large-scale institutional infrastructure.',
      location: 'Kurnool District',
      category: 'Educational',
      image: '/projects/Montessori-Olympus.png'
    },
    {
      id: 4,
      title: 'WOXSEN UNIVERSITY',
      details: 'Comprehensive campus-wide climate control and high-efficiency VRV systems.',
      location: 'Sadasivpeta',
      category: 'Educational',
      image: '/projects/woxsen-university.png'
    },
    {
      id: 5,
      title: 'RNV Commercial Complex',
      details: 'Modern corporate infrastructure with energy-efficient ventilation solutions.',
      location: 'Nanakramguda, Hyderabad',
      category: 'Commercial',
      image: '/projects/rnv-comercial.png'
    },
    {
      id: 6,
      title: 'One Park (KS & CS)',
      details: 'Premium architectural development requiring bespoke HVAC engineering.',
      location: 'Banjara Hills, Hyderabad',
      category: 'Commercial',
      image: '/projects/ks-and-cs-developer.png'
    },
    {
      id: 7,
      title: 'Omega Hospital',
      details: 'Specialized medical-grade air filtration and climate management systems.',
      location: 'Gachibowli, Hyderabad',
      category: 'Medical',
      image: '/projects/omega-hospital.png'
    },
    {
      id: 8,
      title: 'Subishi Forest Edge',
      details: 'Total 44 luxury villas integrated with smart cooling technology.',
      location: 'Pudur',
      category: 'Residential',
      image: '/projects/subishi-forest-edge.png'
    },
    {
      id: 9,
      title: 'My Home Ankura',
      details: 'Total 40 villas featuring high-fidelity Daikin inverter solutions.',
      location: 'Tellapur',
      category: 'Residential',
      image: '/projects/my-home-ankura.png'
    },
    {
      id: 10,
      title: 'ICFAI Business School',
      details: 'High-volume institutional cooling for academic complexes.',
      location: 'Donthanpally-Sankarpalli',
      category: 'Educational',
      image: '/projects/icfai-bussiness-school.png'
    }
  ],
  status: 'idle'
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {}
})

export default projectsSlice.reducer
