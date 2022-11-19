import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.patients[0].name} />

        <img src="/images/blood_pressure_chart.svg" alt="Blood Pressure" />
      </div>

      <Navbar />
    </>
  )
}
