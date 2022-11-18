import React  from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';

import Navbar from './Navbar'
import greeting from '../lib/greeting'

export default function Home() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <div className="mb-3">
          <p className="float-right">
            <Link to="/">
              Sign out
            </Link>
          </p>
          <p className="text-xl">Good {greeting()},</p>
          <h1 className="text-3xl font-bold">Ilka Valtonen</h1>
        </div>

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
