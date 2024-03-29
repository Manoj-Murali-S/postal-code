import React from 'react';
import { Accordion } from "flowbite-react";

const Table = (props) => {
  const { isLoading, error, data } = props;

  const thClass = 'py-1 pr-3 text-right text-sm font-semibold text-gray-900 w-1/2 '
  const tdClass = 'whitespace-nowrap py-1 pr-2 pl-3 text-sm text-gray-900 w-1/2'
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3">

            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : data ? (
              <>
                {data.map((item, index) => (
                  <div className="inline-block min-w-full py-2 align-middle p-4 border border-gray-200 rounded-md shadow-lg">
                    <div key={index}>
                      <h2>{item.Message}</h2>
                      {item.PostOffice.map((office, index) => (
                      <Accordion className='mb-3' collapseAll>
                        <Accordion.Panel className='p-1.5' key={index}>
                          <Accordion.Title>{office.Name}</Accordion.Title>
                          <Accordion.Content>
                           <tbody className="divide-y divide-gray-200">
                           
                            <tr className='border-b border-gray-200'>
                              <th className={thClass}>BranchType</th>
                              <td className={tdClass}>{office.BranchType}</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                              <th className={thClass}>District</th>
                              <td className={tdClass}>{office.District}</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                              <th className={thClass}>Division</th>
                              <td className={tdClass}>{office.Division}</td>
                            </tr>
                            <tr className='border-b border-gray-200'>
                              <th className={thClass}>State</th>
                              <td className={tdClass}>{office.State}</td>
                            </tr>
                          </tbody>
                          </Accordion.Content>
                        </Accordion.Panel>
                      </Accordion>
                      ))}
                      <table className="min-w-full divide-y divide-gray-300">
                       
                          
                        
                      </table>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>

  )

}
export default Table;