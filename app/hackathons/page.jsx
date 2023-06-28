"use client"
import Header from "@/components/Header"
import HackathonCard from "@/components/miniComponents/HackathonCard"
import { useStore } from "@/lib/useStore"
import { useState } from "react"
const Hackathon = () => {
  const {hackathons}=useStore();
  const [verifiedHackathons,setVerifiedhackathons]=useState(hackathons.filter(data => data.verified===true));
  return (
    <>
        <Header />
        <div className="mt-12">
          <h2 className="ml-5 text-3xl font-bold text-center text-blue-400 md:text-6xl md:ml-20">Hackathons</h2>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-4 px-10 mt-10">
          {
            verifiedHackathons.map(data=> <HackathonCard data={data}/>)
          }
        </div>
    </>
  )
}

export default Hackathon