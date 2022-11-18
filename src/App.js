import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

import './App.css'

import Signin from './Signin'
import PatientHome from './patient/Home'
import ProfessionalHome from './professional/Home'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/professional" element={<ProfessionalHome />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
