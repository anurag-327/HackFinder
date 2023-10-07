import React from 'react'
import Countdown from 'react-countdown';
const HackathonTable = ({data}) => {
  const Completionist = () => <span className='font-bold text-center text-red-400'>Expired!</span>;
  return (
    <div className='hidden sm:block'>
        <table className="w-full rounded-lg text-gray-200 text-lg mt-5 mb-10  bg-[#181818] border-gray-500 border divide-y-2 divide-gray-500">
            <thead className="ltr:text-center rtl:text-center">
              <tr>
                  <th className="px-4 py-2 font-medium whitespace-pre-wrap bg-gray-900 border">
                    Name
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-pre-wrap bg-gray-900 border">
                    Status
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-pre-wrap bg-gray-900 border">
                    Apply Before
                  </th>
                  <th className="px-4 py-2 font-medium whitespace-pre-wrap bg-gray-900 border">
                    Link
                  </th>
                  <th className="hidden px-4 py-2 font-medium whitespace-pre-wrap bg-gray-900 border sm:block">
                    Added By
                  </th>
              </tr>
             </thead>
             <tbody className="text-center divide-y divide-gray-500 ">
             {
            data.map((data,index) => <tr>
            <td className="px-4 py-2 font-medium whitespace-pre-wrap border">{data.name}</td>
            <td className="px-4 py-2 whitespace-pre-wrap border ">
            <Countdown className='px-2 py-1 mx-auto font-semibold rounded-md ' date={data.applyBefore} >
             <Completionist />
        </Countdown>
            </td>
            <td className="px-4 py-2 whitespace-pre-wrap border">{data.applyBefore.slice(0,10)}</td>
            <td className="px-4 py-2 text-blue-400 underline whitespace-pre-wrap border"><a href={data.url}>Apply</a></td>
            <td className="hidden px-4 py-2 whitespace-pre-wrap border sm:block">{data.addedBy}</td>
          </tr>)
        }
    </tbody>
           
    </table>
    </div>
  )
}

export default HackathonTable