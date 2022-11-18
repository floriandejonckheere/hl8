import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professional } from '../data'

export default function Patients() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professional} />
      </div>

      <Navbar />
    </>
  )
}
