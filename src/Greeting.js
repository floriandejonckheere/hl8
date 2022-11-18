import React from "react";
import { Link } from 'react-router-dom'

function greeting() {
  const today = new Date()
  const hour = today.getHours()

  if (hour < 6) {
    return 'night'
  } else if (hour < 12) {
    return 'morning'
  } else if (hour < 18) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}


export default function Greeting(props) {
  return (
    <div className="mb-10">
      <p className="float-right">
        <Link to="/">
          Sign out
        </Link>
      </p>
      <p className="text-xl">Good  {greeting()},</p>
      <h1 className="text-3xl font-bold">{props.name}</h1>
    </div>
  )
}
