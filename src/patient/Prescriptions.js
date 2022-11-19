import React from 'react'

import Navbar from './Navbar'
import Greeting from '../Greeting'

import Backend  from '../Backend'
import {Button, Card, CardBody, CardFooter} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export default function Prescriptions() {
  const prescriptions = Backend.prescriptions.filter(r => r.patientId == 1)

  return (
    <>
      <div className="p-8 flex flex-col bg-gray-100 h-full">
        <Greeting name={Backend.patients[0].name} />

        {prescriptions.length == 0 && (
          <div className="italic">
            You currently have no prescriptions
          </div>
        )}

        {prescriptions.map((prescription, index) => (
          <Card className="w-full mb-3" key={prescription.id}>
            <CardBody>
              <strong>{prescription.medication}</strong>
              <p className="mt-2">
                From {prescription.startDate} to {prescription.endDate}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>

      <Navbar />
    </>
  )
}
