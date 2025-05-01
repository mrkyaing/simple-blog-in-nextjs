export default function EducationPage() {
    return (
        <div className="overflow-x-auto">
            <h1 className="text-2xl font-bold mb-4">Education History</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            School/ University
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Year
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">BEHS</td>
                        <td className="px-6 py-4">2011-2013</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">UCSM</td>
                        <td className="px-6 py-4">2013-2015</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}