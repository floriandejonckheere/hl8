import React  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

export default function Account() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.patients[0].name} />

        <div className="mt-4">
          <Link to="/patient/" className="my-4">
            <Button color="red" size="lg" fullWidth>Remove account</Button>
          </Link>
        </div>
      </div>

      <Navbar />
    </>
  )
}
