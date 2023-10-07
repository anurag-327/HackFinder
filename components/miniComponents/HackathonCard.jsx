"use client"
import Countdown from 'react-countdown';
import Image from "next/image"
import {CheckCircle} from "phosphor-react"
const HackathonCard = ({data}) => {

  
  const Completionist = () => <span className='font-bold text-center text-red-400'>Expired!</span>;
    return (
      
    <div className="md:w-[300px] block sm:hidden min-w-[300px] py-4 w-[90%] rounded-md text-white gap-2  bg-gray-900 justify-center">
      {/* <Image className="mx-auto rounded-md" src="/ImageError.webp" width={200} height={200} alt="data"/> */}
      <div className="flex flex-col gap-3 p-2 text-justify">
        <div className='flex items-center justify-center gap-2'>
        <h2 className="inline text-2xl font-bold text-center text-orange-500 underline">{data.name}</h2>
        

        </div>
        {/* <p className='p-1 mx-auto font-light text-center bg-gray-300 rounded-md '>{data.description}</p> */}
         {/* {
          data.tags.length>0&&
               <h3 className='mt-3 font-bold'>Tags:</h3>
        }
        <ul className='flex flex-wrap gap-1 p-1'>
          {
            data.tags.map(data => <li className='px-2 border border-gray-600 rounded-md'>{data}</li>)
          }
        </ul>  */}
        <Countdown className='px-2 py-1 mx-auto font-semibold rounded-md ' date={data.applyBefore} >
             <Completionist />
        </Countdown>
        <div className='p-1 font-semibold text-center '>
          Apply before : {data.applyBefore.slice(0,10)}
        </div>
        
        <a className="p-1 mt-2 font-semibold text-center text-white bg-blue-700 rounded-md" target="blank" href={data.url}>Visit</a>
        <span className='text-sm text-center'>Added by- <a href="#" className='font-semibold text-blue-300 underline'>{data.addedBy}</a></span>
      </div>

    </div>
  )
}

export default HackathonCard