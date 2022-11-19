import React  from 'react'

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
  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={Backend.patients[0].name} />

        <Card className="w-full mb-3">
          <CardBody>
            <span className="float-right text-gray-400 text-sm">Date here</span>
            <strong>Professional</strong> wants to
            <ul className="mt-4">
              <li>Read healthcare data</li>
              <li>Read medication prescriptions</li>
            </ul>

            <p className="mt-4">Duration: 5 days</p>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <Button color="green">Approve</Button>
            <Button color="red">Reject</Button>
          </CardFooter>
        </Card>
      </div>

      <Navbar />
    </>
  )
}
