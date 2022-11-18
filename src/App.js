import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

import './App.css'

import Signin from './Signin'

import PatientHome from './patient/Home'
import PatientData from './patient/Data'
import PatientAccount from './patient/Account'

import ProfessionalHome from './professional/Home'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/patient/" element={<PatientHome />} />
        <Route path="/patient/data/" element={<PatientData />} />
        <Route path="/patient/account/" element={<PatientAccount />} />

        <Route path="/professional" element={<ProfessionalHome />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
