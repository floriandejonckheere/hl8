import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@material-tailwind/react';

import { MdSpaceDashboard, MdAreaChart, MdAccountCircle } from 'react-icons/md'

function Home() {
  return (
    <>
      <div class="p-8 flex flex-col">
        <div className="mb-3">
          <p class="float-right">
            <Link to="/">
              Sign out
            </Link>
          </p>
          <p className="text-xl">Good morning,</p>
          <h1 className="text-3xl font-bold">Ilka Valtonen</h1>
        </div>

        <div className="mt-4">
          <Link to="/patient/" className="my-4">
            <Button color="blue" size="lg" fullWidth>View patients</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
        <Link to="/patient/" className="flex flex-grow items-center justify-center p-2">
          <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdSpaceDashboard />
            </span>
            <span className="block text-xs">Overview</span>
          </div>
        </Link>
        <Link to="/patient/" className="flex flex-grow items-center justify-center p-2 text-gray-500">
          <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdAreaChart />
            </span>
            <span className="block text-xs">My data</span>
          </div>
        </Link>
        <Link to="/patient/" className="flex flex-grow items-center justify-center p-2 text-gray-500">
          <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdAccountCircle />
            </span>
            <span className="block text-xs">Overview</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home
