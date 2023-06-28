"use client"
import Image from "next/image";
import { useStore } from "@/lib/useStore"
import {UserPlus, UserCircle, List, X} from "phosphor-react"
import { supabase } from "@/supabase/supabseconfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header()
{
    const {user,setUser,resetUser,session,setSession,resetSession}=useStore();
    const router=useRouter();
    function openDrawer()
    {
        document.querySelector(".navDrawer").classList.toggle("hidden");
        document.querySelector(".navList").classList.toggle("hidden");
        document.querySelector(".navX").classList.toggle("hidden");
    }
    async function handleSignOut()
    {
        const { error } = await supabase.auth.signOut()
        if(error) console.log("error signing out")
        else 
        {
            resetSession();
            resetUser();
        }
    }
    return(
        <nav className="sticky top-0 z-20 flex items-center bg-[#050b13] justify-between gap-2 md:px-3">
            <div className="flex items-center justify-center gap-2">
                <Image src="/logo.png" width={50} height={40} alt="HackFinder"  className="rounded-full"/>
                <h2 className="hidden font-semibold font-poppins md:block">HackFinder</h2>
            </div>
            <List onClick={openDrawer} className="cursor-pointer navList md:hidden" size={40} weight="bold" fil="#fffffff"/>
            <X onClick={openDrawer} className="hidden navX md:hidden" size={40} weight="bold" fil="#fffffff"/>
            <div className="absolute hidden gap-5 navDrawer text-xl flex flex-col items-center md:items-center md:justify-center w-[300px] md:w-auto bg-[#080a1a] md:bg-transparent h-screen md:h-auto md:top-0 top-14 md:relative md:flex md:flex-row md:gap-2 xl:gap-5">
                <a className="text-sm transition-all duration-300 ease-in-out group" href="/">
                    <span className="bg-left-bottom bg-gradient-to-r from-orange-300 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Home
                    </span>
                </a>
                <a className="text-sm transition-all duration-300 ease-in-out text-md group" href="/hackathons">
                    <span className="bg-left-bottom bg-gradient-to-r bg-transparent from-blue-200 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Hackathons
                    </span>
                </a>
                <a className="text-sm transition-all duration-300 ease-in-out text-md group" href="/contribute">
                    <span className="bg-left-bottom bg-gradient-to-r bg-transparent from-blue-200 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Contribute
                    </span>
                </a>
                {/* <input className="px-2 py-[1px] outline-none resize-none text-white bg-transparent  border-2 border-gray-400 focus:bg-white rounded-md" type="text" placeholder="Search"/> */}
                {
                    (user==null&&session==null)?(<>
                      <a className="text-sm transition-all duration-300 ease-in-out group" href={`/signin?callback_url=${window.location.href}`}>
                         <span className="bg-left-bottom bg-gradient-to-r from-blue-200 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                         Sign in
                         </span>
                      </a>
                    <a className="px-2 py-1 text-sm duration-100 transform border border-gray-200 hover:bg-green-600 md:rounded-sm xl:rounded-full" href={`/signup?callback_url=${window.location.href}`}>Sign up</a>
                    </>):(<button onClick={handleSignOut} className="px-2 py-1 text-sm duration-100 transform border border-gray-200 hover:bg-red-600 md:rounded-sm xl:rounded-full">Sign Out</button>)
                }  
            </div>
        </nav>
    )
}