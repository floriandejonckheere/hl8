import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'
import {Button} from "@material-tailwind/react";

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={Backend.professionals[0].name} />

        <span className="font-bold">{Backend.patients[0].name}</span>

        <img src="/images/blood_pressure_chart.svg" alt="Blood Pressure" className="mt-4" />
        <img src="/images/heart_rate_chart.svg" alt="Heart Rate" className="mt-12" />

        <div class="mt-8">
          <Button color="blue" size="lg" fullWidth>Export data</Button>
        </div>
      </div>

      <Navbar />
    </>
  )
}
