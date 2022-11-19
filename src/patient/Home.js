import React, { useState } from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
} from '@material-tailwind/react'

export default function Home() {
  const [seed, setSeed] = useState(1);

  const approve = (id) => {
    Backend.requests.find(r => r.id == id).approved = true

    setSeed(Math.random())
  }

  const reject = (id) => {
    Backend.requests.find(r => r.id == id).approved = false

    setSeed(Math.random())
  }

  const requests = Backend.requests.filter(r => r.patientId == 1 && r.approved == null)

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.patients[0].name} />

        {requests.length == 0 && (
            <div className="italic">
              You currently have no access requests to review
            </div>
        )}

        {requests.map((request, index) => (
          <Card className="w-full mb-3" key={request.id}>
            <CardBody>
              <strong>{Backend.professionals.find(p => p.id == request.professionalId).name}</strong> wants to
              <ul className="mt-4">
                {request.healthcare ? (<li>&bull; Read healthcare data</li>) : null}
                {request.prescriptions ? (<li>&bull; Read prescriptions</li>) : null}
              </ul>

              <p className="mt-4">Duration: {request.duration} days</p>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              <Button color="green" onClick={() => approve(request.id)}>Approve</Button>
              <Button color="red" onClick={() => reject(request.id)}>Reject</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Navbar />
    </>
  )
}
