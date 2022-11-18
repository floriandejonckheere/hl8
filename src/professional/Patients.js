import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardBody,
} from "@material-tailwind/react";

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professionals, patients } from '../data'

export default function Patients() {
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professionals[0].name} />

        {patients.map((patient) => (
          <Link to={`/professional/patients/${patient.id}`} key={patient.id}>
            <Card className="w-full mb-3">
              <CardBody>
                <span className="float-right text-gray-400 text-sm">{patient.birthdate}</span>
                <strong>{patient.name}</strong>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>

      <Navbar />
    </>
  )
}
