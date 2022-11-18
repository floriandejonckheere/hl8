import {Link} from "react-router-dom";
import greeting from "./lib/greeting";
import React from "react";

export default function Greeting(props) {
  return (
    <div className="mb-3">
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
