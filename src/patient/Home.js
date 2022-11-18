import React  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';

import Navbar from './Navbar'
import Greeting from '../Greeting'

export default function Home() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting />

        <div className="mt-4">
          <Link to="/patient/" className="my-4">
            <Button color="blue" size="lg" fullWidth>View patients</Button>
          </Link>
        </div>
      </div>

      <Navbar />
    </>
  )
}
