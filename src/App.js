import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

import './App.css'

import Signin from './Signin'

import PatientHome from './patient/Home'
import PatientData from './patient/Data'
import PatientAccount from './patient/Account'

import ProfessionalHome from './professional/Home'
import ProfessionalPatients from './professional/Patients'
import ProfessionalAccount from './professional/Account'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/patient/" element={<PatientHome />} />
        <Route path="/patient/data/" element={<PatientData />} />
        <Route path="/patient/account/" element={<PatientAccount />} />

        <Route path="/professional" element={<ProfessionalHome />} />
        <Route path="/professional/patients/" element={<ProfessionalPatients />} />
        <Route path="/professional/account/" element={<ProfessionalAccount />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
