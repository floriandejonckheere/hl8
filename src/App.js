import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { App as KonstaApp } from 'konsta/react'

import './App.css'

import Home from './Home'

function App() {
  return (
    <KonstaApp theme="material">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </KonstaApp>
  )
}

export default App
