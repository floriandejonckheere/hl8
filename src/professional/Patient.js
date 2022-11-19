import React from 'react'
import {Link, useParams} from 'react-router-dom'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import {
  Button,
} from '@material-tailwind/react'

import Backend  from '../Backend'

export default function Patient() {
  let params = useParams();

  const patient = Backend.patients.find(patient => patient.id == params.id)

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.professionals[0].name} />

        <div className="text-center">
          <img src={`/images/${patient.image}`} alt={patient.name} className="rounded-full w-64 h-64 mx-auto mb-8" />

          <div className="text-xl font-bold">
            {patient.name}
          </div>
        </div>

        <div className="text-gray-400 text-sm px-16 mt-4">
          <span className="float-right">{patient.birthdate}</span>
          {patient.sex}
        </div>

        <Link to={`/professional/patients/${patient.id}/request`} className="mt-8">
          <Button color="blue" size="lg" fullWidth>Request access to data</Button>
        </Link>
      </div>

      <Navbar />
    </>
  )
}
