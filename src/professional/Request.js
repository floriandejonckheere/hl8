import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { Button, Switch, Select, Option } from '@material-tailwind/react'

import Backend  from '../Backend'

export default function Patient() {
  let params = useParams();

  const patient = Backend.patients.find(patient => patient.id == params.id)

  return (
    <>
      <div className="p-8 flex flex-col justify-between">
        <Greeting name={Backend.professionals[0].name} />

        You are requesting access to the data of
        <div className="text-xl font-bold">
          {patient.name}
        </div>

        <div className="mt-8">
          <Switch id="healthcare" label="Healthcare data" />
        </div>

        <div className="mt-8">
          <Switch id="prescriptions" label="Medication prescriptions" />
        </div>

        <div className="mt-10">
          <Select label="Duration of access grant">
            <Option>1 day</Option>
            <Option>3 days</Option>
            <Option>1 week</Option>
          </Select>
        </div>

        <Link to={`/professional/patients/${patient.id}/request`} className="mt-8">
          <Button color="blue" size="lg" fullWidth>Request access to data</Button>
        </Link>
      </div>

      <Navbar />
    </>
  )
}
