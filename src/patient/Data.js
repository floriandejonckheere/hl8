import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={Backend.patients[0].name} />

        <img src="/images/blood_pressure_chart.svg" alt="Blood Pressure" />
        <img src="/images/heart_rate_chart.svg" alt="Heart Rate" className="mt-16" />
      </div>

      <Navbar />
    </>
  )
}
