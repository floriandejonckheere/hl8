import React from 'react'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professionals, patients } from '../data'

export default function Patient() {
  let params = useParams();

  const patient = patients[params.id]

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professionals[0].name} />

        <div className="text-center">
          <img src={`/images/${patient.image}`} alt={patient.name} className="rounded-full w-64 h-64 mx-auto mb-12" />

          <div className="text-xl font-bold">
            {patient.name}
          </div>
        </div>

        <div className="text-gray-400 text-sm px-16 mt-4">
          <span className="float-right">{patient.birthdate}</span>
          {patient.sex}
        </div>
      </div>

      <Navbar />
    </>
  )
}
