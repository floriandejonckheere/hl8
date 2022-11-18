import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react';

import Navbar from './Navbar'

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
          <p className="text-xl">Good morning,</p>
          <h1 className="text-3xl font-bold">Ilka Valtonen</h1>
        </div>
      </div>

      <Navbar />
    </>
  )
}
