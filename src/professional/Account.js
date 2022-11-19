import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-tailwind/react';

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

export default function Account() {
  const professional = Backend.professionals[0]

  const [name, setName] = useState(professional.name)
  const navigate = useNavigate()

  const update = (name) => {
    professional.name = name

    navigate('/professional/')
  }

  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={professional.name} />

        <div className="mt-4">
          <Input id="healthcare" label="Name" defaultValue={professional.name} onChange={(event) => setName(event.target.value)} />
        </div>

        <Button color="blue" size="lg" fullWidth className="mt-8" onClick={() => update(name)}>Save</Button>

        <div className="mt-60">
          <p className="text-red-400 font-bold mb-8">
            WARNING: removing your account will delete all your data permanently and irrevocably.
          </p>

          <Link to="/" className="my-4">
            <Button color="red" size="lg" fullWidth>Remove account</Button>
          </Link>
        </div>
      </div>

      <Navbar />
    </>
  )
}
