import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { App as KonstaApp } from 'konsta/react'

import './App.css'

import Signin from './Signin'
import PatientHome from './patient/Home'
import ProfessionalHome from './professional/Home'

function App() {
  return (
    <KonstaApp theme="material">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/professional" element={<ProfessionalHome />} />
      </Routes>
    </KonstaApp>
  )
}

export default App
