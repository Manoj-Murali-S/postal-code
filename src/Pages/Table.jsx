import React from 'react';

const Table = (props) => {
    const { isLoading, error, data } = props;

    const thClass = 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/2'
    const tdClass = 'whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0 w-1/2'
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
                <div className="mt-4 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3">
                        <div className="inline-block min-w-full py-2 align-middle p-4 border border-gray-200 rounded-md shadow-lg">
                            {/* <table className="min-w-full divide-y divide-gray-300">

                         {pincodeData ? (     
                               <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <th scope="col" className={thClass}>Name</th>
                                        <td className={tdClass}>{pincodeData.PostOffice[0].Name}</td>

                                    </tr>
                                    <tr>
                                        <th scope="col" className={thClass}>District</th>
                                        <td className={tdClass}>{pincodeData.PostOffice[0].District}</td>

                                    </tr>
                                    <tr>
                                        <th scope="col" className={thClass}>Name</th>
                                        <td className={tdClass}>Lindsay Walton</td>

                                    </tr>
                                    <tr>
                                        <th scope="col" className={thClass}>Name</th>
                                        <td className={tdClass}>Lindsay Walton</td>

                                    </tr>

                                </tbody>
                                 ) : (
                                    <p>Loading pincode details...</p>
                                 )}
                            </table> */}
                             {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <>
          {data.map((item, index) => (
            <div key={index}>
              <h2>{item.Message}</h2>
              <table>
                <tbody>
                  {item.PostOffice.map((office, index) => (
                    <tr key={index}>
                      <td>{office.Name}</td>
                      <td>{office.BranchType}</td>
                      <td>{office.DeliveryStatus}</td>
                      <td>{office.Circle}</td>
                      <td>{office.District}</td>
                      <td>{office.Division}</td>
                      <td>{office.Region}</td>
                      <td>{office.Block}</td>
                      <td>{office.State}</td>
                      <td>{office.Country}</td>
                      <td>{office.Pincode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Table;