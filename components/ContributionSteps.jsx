"use client"
import { useState } from "react"
import { CaretUp,CaretDown } from "phosphor-react"

const ContributionSteps = () => {
    const [open,setOpen]=useState(false)
  return (
    <div className="p-1 flex flex-col bg-white text-black mx-auto mt-5 z-40 md:w-[508px] max-w-[90%] gap-1 w-[390px] rounded-t-md">
        <div className="relative flex items-center h-8 gap-2 p-2 mb-1 bg-gray-100 rounded-t-md">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <div className="w-4 h-4 rounded-full bg-purple-950"></div>
            <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
            <div className="font-normal text-red-700 md:ml-3 md:font-semibold">Read Carefullly before contributing</div>
            {
                open?<CaretUp onClick={() => setOpen(!open)} className="absolute cursor-pointer right-1" size={25} fill="#000000" weight="bold" />:<CaretDown onClick={() => setOpen(!open)} className="absolute cursor-pointer right-1" size={25} fill="#000000" weight="bold" />
            }
        </div>
        {
            open&&(
                <div className="flex flex-col p-3 font-mono font-semibold">
                   <span>1- Fill out the form below</span>
                   <span>2- Once you fill up the form, we will verify the data</span>
                   <span>3- Data will be availaible to user's after successfull verification</span>
                   <span>4- Data gets verified within 24 hrs of your submission.</span>
               </div>
            )
        }
        
        
    </div>
  )
}

export default ContributionSteps