import Image from "next/image"
import {X, List,Command,User,GearSix, MicrosoftTeamsLogo,CheckCircle, SignOut,UserPlus,House } from "phosphor-react"

import { supabase } from "@/supabase/supabseconfig"
import { useStore } from "@/lib/useStore"
import { useRouter } from "next/navigation"
const Header = ({setSection,section}) => {
    const {resetSession,resetUser,setAdmin}=useStore();
    const router=useRouter();
    async function handleSignOut()
    {
        const { error } = await supabase.auth.signOut()
        if(error) console.log("error signing out")
        else 
        {
            resetSession();
            resetUser();
            setAdmin(false)
            router.push("/");
        }
    }
    function closeDrawer()
    {
       document.getElementById("adminDrawer").classList.add("hidden")
    }
  return (
    <aside id="adminDrawer" className=" px-4 z-20 hidden absolute md:relative md:block py-4 md:w-[26%] min-w-[250px] bg-gray-800 h-screen">
       <div className="relative flex items-center justify-start gap-2">
            <Image src="/logo.png" width={50} height={40} alt="HackFinder"  className="rounded-full"/>
            <h2 className="text-lg font-semibold font-poppins">HackFinder</h2>
            <X onClick={closeDrawer} className="absolute cursor-pointer md:hidden right-2" size={30} weight="bold" color="#ffffff" />
        </div>
        <div className="flex flex-col items-center gap-3 mt-20 font-sans">
            <button onClick={()=> {setSection("dashboard");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2 ${section==="dashboard"&&"bg-gray-700"}  rounded-md hover:bg-gray-500 `}>
                <Command size={32} color="#ffffff" weight="fill" />
                <span className="font-semibold">Dashboard</span>
            </button>
            <button onClick={()=> {setSection("verify");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2   ${section==="verify"&&"bg-gray-700"} rounded-md bg-gray-70 hover:bg-gray-500 `}>
                <CheckCircle size={26} color="#ffffff" weight="fill" />
                <span className="font-semibold">verify</span>
            </button>
            <button onClick={()=> {setSection("topcontributors");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2  ${section==="topcontributors"&&"bg-gray-700"} rounded-md bg-gray-70 hover:bg-gray-500`}>
                <MicrosoftTeamsLogo size={26} color="#ffffff" weight="fill" />
                <span className="font-semibold">Top Contributors</span>
            </button>
            <button onClick={()=> {setSection("profile");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2  ${section==="profile"&&"bg-gray-700"} rounded-md bg-gray-70 hover:bg-gray-500`}>
                <User size={26} color="#ffffff" weight="regular" />
                <span className="font-semibold">Profile</span>
            </button>
            <button onClick={()=> {setSection("addadmin");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2  ${section==="addadmins"&&"bg-gray-700"} rounded-md bg-gray-70 hover:bg-gray-500`}>
                <UserPlus size={26} color="#ffffff" weight="regular" />
                <span className="font-semibold">Add Admins</span>
            </button>
            <button onClick={()=> {setSection("settings");document.getElementById("adminDrawer").classList.add("hidden")}} className={`flex items-center justify-start w-full gap-2 p-2  ${section==="settings"&&"bg-gray-700"} rounded-md bg-gray-70 hover:bg-gray-500`}>
                <GearSix size={26} color="#ffffff" weight="fill" />
                <span className="font-semibold">Settings</span>
            </button>
            <a href="/" className="flex items-center justify-start w-full gap-2 p-2 mt-10 rounded-md bg-gray-70 hover:bg-gray-500">
                <House size={26} color="#ffffff" weight="fill" />
                <span className="font-semibold">Home</span>
            </a>
            
            <button onClick={handleSignOut} className="flex items-center justify-start w-full gap-2 p-2 rounded-md bg-gray-70 hover:bg-gray-500">
                <SignOut size={26} color="#ffffff" weight="fill" />
                <span className="font-semibold">SignOut</span>
            </button>
            

        </div>

    </aside>
  )
}

export default Header