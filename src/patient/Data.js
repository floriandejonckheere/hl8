import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import greeting from '../lib/greeting'

export default function Data() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <div className="mb-3">
          <p className="float-right">
            <Link to="/">
              Sign out
            </Link>
          </p>
          <p className="text-xl">Good  {greeting()},</p>
          <h1 className="text-3xl font-bold">Ilka Valtonen</h1>
        </div>
      </div>

      <Navbar />
    </>
  )
}