import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'
import { Card, CardBody} from '@material-tailwind/react'

export default function Home() {
  const requests = Backend.requests.filter(r => r.professionalId == 0 && r.approved == null)

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.professionals[0].name} />

        {requests.length == 0 && (
          <div className="italic">
            You currently have no access requests sent
          </div>
        )}

        {requests.map((request, index) => (
          <Card className="w-full mb-3" key={request.id}>
            <CardBody>
              <strong>{Backend.patients.find(p => p.id == request.patientId).name}</strong>
              <p className="mt-4">You requested to</p>
              <ul className="mt-2">
                {request.healthcare ? (<li>&bull; Read healthcare data</li>) : null}
                {request.prescriptions ? (<li>&bull; Read prescriptions</li>) : null}
              </ul>

              <p className="mt-4">Duration: {request.duration} days</p>
              <p className="mt-4">Not approved yet</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <Navbar />
    </>
  )
}
