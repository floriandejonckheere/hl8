import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { patients } from '../data'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={patients[0].name} />
      </div>

      <Navbar />
    </>
  )
}
