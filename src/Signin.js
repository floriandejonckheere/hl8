import React  from 'react'
import { Link } from 'react-router-dom'
import { MdHealthAndSafety } from 'react-icons/md'
import { Button } from "@material-tailwind/react";

function Home() {
  return (
    <div className="px-8 flex flex-col">
      <div className="my-32 w-full flex justify-center">
        <MdHealthAndSafety className="w-32 h-32" />
      </div>

      <div className="grow"></div>

      <Link to="/patient/" className="my-4">
        <Button color="blue" size="lg" fullWidth>Sign in as patient</Button>
      </Link>

      <Link to="/professional/" className="my-4">
        <Button color="amber" size="lg" fullWidth>Sign in as healthcare professional</Button>
      </Link>
    </div>
  )
}

export default Home
