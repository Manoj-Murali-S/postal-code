const Table = () => {
    const thClass = 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 w-1/2'
    const tdClass = 'whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-0 w-1/2'
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3">
                        <div className="inline-block min-w-full py-2 align-middle p-4 border border-gray-200 rounded-md shadow-lg">
                            <table className="min-w-full divide-y divide-gray-300">

                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <th scope="col" className={thClass}>Name</th>
                                        <td className={tdClass}>Lindsay Walton</td>

                                    </tr>
                                    <tr>
                                        <th scope="col" className={thClass}>Name</th>
                                        <td className={tdClass}>Lindsay Walton</td>

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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Table;