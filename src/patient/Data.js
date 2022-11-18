import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name="Ilka Valtonen" />
      </div>

      <Navbar />
    </>
  )
}
