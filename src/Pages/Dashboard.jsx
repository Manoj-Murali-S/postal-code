import React from "react"
import { FaSignsPost } from "react-icons/fa6";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavBar from "../Components/Navbar"
import Table from "./Table"

const Dashboard = () => {
  const inputClass = " block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 focus:ring-1 sm:text-sm sm:leading-6 focus:outline-none"
 
  return (
    <>
      <NavBar />
      <div className="container mx-auto ">
        <div className="max-w-md mt-6 mx-auto p-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Search candidates
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSignsPost className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className={inputClass}
                placeholder="postal code"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <MagnifyingGlassIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Search
            </button>
          </div>
        </div>
<Table />
      </div>
    </>
  )
}
export default Dashboard;