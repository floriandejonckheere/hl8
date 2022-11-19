import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountCircle, MdAreaChart, MdTextSnippet, MdSpaceDashboard } from 'react-icons/md'

export default function Navbar() {
  return (
    <div className="bg-white fixed bottom-0 w-full border-t border-gray-200 flex">
      <NavLink
        to="/patient/"
        className={({ isActive }) => `flex flex-grow items-center justify-center active:bg-blue-50 p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdSpaceDashboard />
            </span>
          <span className="block text-xs">Overview</span>
        </div>
      </NavLink>

      <NavLink
        to="/patient/data"
        className={({ isActive }) => `flex flex-grow items-center justify-center active:bg-blue-50 p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-2 text-3xl text-center">
              <MdAreaChart />
            </span>
          <span className="block text-xs">My data</span>
        </div>
      </NavLink>

      <NavLink
        to="/patient/prescriptions"
        className={({ isActive }) => `flex flex-grow items-center justify-center active:bg-blue-50 p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-8 text-3xl text-center">
              <MdTextSnippet />
            </span>
          <span className="block text-xs">My prescriptions</span>
        </div>
      </NavLink>

      <NavLink
        to="/patient/account"
        className={({ isActive }) => `flex flex-grow items-center justify-center active:bg-blue-50 p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-2 text-3xl text-center">
              <MdAccountCircle />
            </span>
          <span className="block text-xs">Account</span>
        </div>
      </NavLink>
    </div>
  )
}
