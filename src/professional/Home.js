import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

export default function Home() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.professionals[0].name} />
      </div>

      <Navbar />
    </>
  )
}
