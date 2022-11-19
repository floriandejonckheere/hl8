import React, { useState, useEffect } from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professionals, endpoint } from '../data'

export default function Home() {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`${endpoint}/`).then(
      res => setState(res.data.json())
    )
  })

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professionals[0].name} />
      </div>

      {state}

      <Navbar />
    </>
  )
}
