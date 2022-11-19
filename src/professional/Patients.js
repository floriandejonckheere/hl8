import React from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardBody,
} from "@material-tailwind/react";

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend from '../Backend'

export default function Patients() {
  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={Backend.professionals[0].name} />

        {Backend.patients.map((patient) => (
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
