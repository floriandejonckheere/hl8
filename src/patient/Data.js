import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { patient } from '../data'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={patient} />
      </div>

      <Navbar />
    </>
  )
}
