import React, {useState, useEffect} from "react";
import { FaSignsPost } from "react-icons/fa6";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavBar from "../Components/Navbar";
import Table from "./Table";

const Dashboard = () => {
  const inputClass =
    " block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-gray-400 focus:ring-1 sm:text-sm sm:leading-6 focus:outline-none";
  const [count, setCount] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${count}`
        );
        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (count.length === 6) {
      fetchData();
    }
  }, [count]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCount(inputValue);
    if (inputValue.length !== 6) {
      setInputError("PIN code must be 6 digits");
    } else {
      setInputError(null);
    }
  };
  return (
    <>
      <NavBar />
      <div className="container mx-auto ">
        <div className="max-w-md mt-6 mx-auto p-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Search candidates
          </label>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSignsPost
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                value={count}
                onChange={handleInputChange}
                placeholder="Enter PIN code"
                className={inputClass}
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <MagnifyingGlassIcon
                className="-ml-0.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Search
            </button>
          </div>

          {inputError && <p style={{ color: "red" }}>{inputError}</p>}
        </div>
        <Table isLoading={isLoading} error={error} data={data} />
      </div>
    </>
  );
};
export default Dashboard;
