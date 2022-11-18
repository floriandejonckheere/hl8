import React  from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professionals } from '../data'

export default function Home() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professionals[0].name} />
      </div>

      <Navbar />
    </>
  )
}
