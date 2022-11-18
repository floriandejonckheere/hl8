import React  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';

import Navbar from './Navbar'
import Greeting from '../Greeting'

export default function Home() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name="Ilka Valtonen" />
      </div>

      <Navbar />
    </>
  )
}
