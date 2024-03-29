import React from 'react';
const Table = (props) => {
  const { isLoading, error, data } = props;

  const thClass = 'py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/2 '
  const tdClass = 'whitespace-nowrap py-4 pl-2 pr-3 text-sm text-gray-900 sm:pl-0 w-1/2'
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3">
            <div className="inline-block min-w-full py-2 align-middle p-4 border border-gray-200 rounded-md shadow-lg">
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : data ? (
                <>
                  {data.map((item, index) => (
                    <div key={index}>
                      <h2>{item.Message}</h2>
                      <table className="min-w-full divide-y divide-gray-300">
                        {item.PostOffice.map((office, index) => (
                        <tbody key={index} className="divide-y divide-gray-200">
                          <tr>
                            <th classnName={thClass}>Name</th>
                            <td classnName={tdClass}>{office.Name}</td>
                          </tr>
                          <tr>
                            <th classnName={thClass}>BranchType</th>
                            <td classnName={tdClass}>{office.BranchType}</td>
                          </tr>
                          <tr>
                            <th classnName={thClass}>District</th>
                            <td classnName={tdClass}>{office.District}</td>
                          </tr>
                          <tr>
                            <th classnName={thClass}>Division</th>
                            <td classnName={tdClass}>{office.Division}</td>
                          </tr>
                          <tr>
                            <th classnName={thClass}>State</th>
                            <td classnName={tdClass}>{office.State}</td>
                          </tr>
                        </tbody>
                        ))}
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