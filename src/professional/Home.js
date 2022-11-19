import React from 'react'
import { Link } from 'react-router-dom'

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
  const requests = Backend.requests.filter(r => r.professionalId == 0)

  return (
    <>
      <div className="p-8 pb-16 flex flex-col bg-gray-100 h-full">
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
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
              {request.approved == null && (
                <div>Not yet approved</div>
              ) || request.approved == true && (
                <>
                  <div className="text-green-400 font-bold">Approved</div>
                  <Link to="/professional/data">
                    <Button color="blue">Open</Button>
                  </Link>
                </>
              ) || request.approved == false && (
                <div className="text-red-400 font-bold">Rejected</div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Navbar />
    </>
  )
}
