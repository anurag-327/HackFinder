"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HackathonCard from "@/components/miniComponents/HackathonCard"
import HackathonTable from "@/components/miniComponents/HackathonTable"
import { useStore } from "@/lib/useStore"
import { useEffect, useState } from "react"
const Hackathon = () => {
  const {hackathons}=useStore();
  const [verifiedHackathons,setVerifiedhackathons]=useState(hackathons.filter(data => data.verified===true));

  verifiedHackathons.sort(function(a,b){
     return new Date(b.applyBefore) - new Date(a.applyBefore)
  })

  return (
    <>
        <Header />
        <div className="mt-12">
          <h2 className="ml-5 text-3xl font-bold text-center text-blue-400 md:text-6xl md:ml-20">Hackathons</h2>
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-4 px-10 mt-10">
          {
            verifiedHackathons.map(data=> <HackathonCard key={data.id} data={data}/>)
          }
          {
            <HackathonTable data={verifiedHackathons} />
          }
        </div>
        <Footer />
    </>
  )
}

export default Hackathon