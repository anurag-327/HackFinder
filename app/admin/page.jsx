"use client"
import { useEffect, useState } from 'react'
import { useStore } from '@/lib/useStore'
import { adminStore } from '@/lib/adminStore';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabase/supabseconfig';
import { Toaster, toast } from 'react-hot-toast';
import AdminHackathonCard from '@/components/miniComponents/AdminHackathonCard';
import Header from '@/components/AdminComponents/Header';
import Dashboard from '@/components/AdminComponents/Dashboard';
import Verify from '@/components/AdminComponents/Verify';
import Profile from '@/components/AdminComponents/Profile';
import Settings from '@/components/AdminComponents/Settings';
import TopContributors from '@/components/AdminComponents/TopContributors';
import AddAdmin from '@/components/AdminComponents/AddAdmin';
import { List } from 'phosphor-react';
const Admin = () => {

    const {user,hackathons}=useStore();
    const {verifiedHackathons,unverifiedHackathons,setUnverifiedHackathons,setVerifiedHackathons,initializeUnverifiedHackathons,initializeVerifiedHackathons}=adminStore();
    const router =useRouter();
    const [access,setAccess]=useState(false);
    const [section,setSection]=useState("dashboard");
    useEffect(()=>
    {
        if(user==null)
        {
            router.push("/signin");
        }
        else{
              (async function()
              {
                
                  const {data,error}=await supabase
                  .from('admins')
                  .select()
                  .eq('user_id', user.id)
                   
                  if(data.length>0)
                  {
                    setAccess(true);
                    initializeVerifiedHackathons(hackathons.filter(data => data.verified===true))
                    initializeUnverifiedHackathons(hackathons.filter(data => data.verified===false))
                  }
                  else{
                    setAccess(false);
                    toast.error("Accessible only to admins!")
                    router.push("/");
                  }
                  
              }())
        }
        
    },[])
    function openDrawer()
    {
       document.getElementById("adminDrawer").classList.remove("hidden")
    }
  return (access&&
    <main className='flex gap-4 bg-gray-200'>
        <Toaster position='top-right' reverseOrder/>
        <Header section={section} setSection={setSection} />
        <div className='w-full h-screen p-3 overflow-scroll text-black bg-gray-200'>
            <div className='w-full p-1 mb-4 bg-gray-300 rounded-md min-h-[40px]'>
                   <List onClick={openDrawer}  className="block ml-2 cursor-pointer md:hidden " size={30} weight="bold" color="#000000" />
            </div>
            {
                section==="dashboard"&& <Dashboard  />
            }
            {
                section==="verify"&& <Verify  />
            }
            {
                section==="profile"&& <Profile />
            }
            {
                section==="addadmin"&& <AddAdmin />
            }
            {
                section==="settings"&& <Settings />
            }
            {
                section==="topcontributors"&& <TopContributors />
            }

        </div>
    </main>
  )
}

export default Admin