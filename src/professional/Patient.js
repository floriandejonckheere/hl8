import React from 'react'
import { useParams } from 'react-router-dom'

import {
  Card,
  CardBody,
} from "@material-tailwind/react";

import Navbar from './Navbar'
import Greeting from '../Greeting'

import { professionals, patients } from '../data'

export default function Patient() {
  let params = useParams();

  return (
    <>
      <div className="p-8 flex flex-col">
        <Greeting name={professionals[0].name} />

        <div className="text-center text-xl font-bold">
          {patients[params.id].name}
        </div>
      </div>

      <Navbar />
    </>
  )
}
