import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { Button, Switch, Select, Option } from '@material-tailwind/react'

import Backend  from '../Backend'

export default function Patient() {
  let params = useParams();

  const [healthcare, setHealthcare] = useState(false)
  const [prescriptions, setPrescriptions] = useState(false)
  const [duration, setDuration] = useState(1)
  const navigate = useNavigate()

  const patient = Backend.patients.find(patient => patient.id == params.id)

  const request = (patientId, healthcare, prescriptions, duration) => {
    Backend.requestId += 1

    Backend.requests.push({
      id: Backend.requestId,
      professionalId: 0,
      patientId,
      healthcare,
      prescriptions,
      duration,
    })

    navigate('/professional/')
  }

  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={Backend.professionals[0].name} />

        You are requesting access to the data of
        <div className="text-xl font-bold">
          {patient.name}
        </div>

        <div className="mt-8">
          <Switch id="healthcare" label="Healthcare data" onChange={(event) => setHealthcare(event.target.checked)} />
        </div>

        <div className="mt-8">
          <Switch id="prescriptions" label="Medication prescriptions" onChange={(event) => setPrescriptions(event.target.checked)} />
        </div>

        <div className="mt-10">
          <Select label="Duration of access grant">
            <Option onClick={() => setDuration(1)}>1 day</Option>
            <Option onClick={() => setDuration(3)}>3 days</Option>
            <Option onClick={() => setDuration(7)}>1 week</Option>
          </Select>
        </div>

        <div className="mt-8">
          <Button
            color="blue"
            size="lg"
            fullWidth
            onClick={() => request(
              patient.id,
              healthcare,
              prescriptions,
              duration,
            )}
          >
            Request access to data
          </Button>
        </div>
      </div>

      <Navbar />
    </>
  )
}
