import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountCircle, MdLocalHospital, MdSpaceDashboard } from 'react-icons/md'

export default function Navbar() {
  return (
    <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
      <NavLink
        to="/professional/"
        className={({ isActive }) => `flex flex-grow items-center justify-center p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdSpaceDashboard />
            </span>
          <span className="block text-xs">Overview</span>
        </div>
      </NavLink>

      <NavLink
        to="/professional/patients"
        className={({ isActive }) => `flex flex-grow items-center justify-center p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdLocalHospital />
            </span>
          <span className="block text-xs">Patients</span>
        </div>
      </NavLink>

      <NavLink
        to="/professional/account"
        className={({ isActive }) => `flex flex-grow items-center justify-center p-2 ${!isActive ? "text-gray-500" : undefined}` }
      >
        <div className="text-center">
            <span className="block h-8 pl-3 text-3xl text-center">
              <MdAccountCircle />
            </span>
          <span className="block text-xs">Account</span>
        </div>
      </NavLink>
    </div>
  )
}
