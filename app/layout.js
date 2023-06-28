"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { supabase } from '@/supabase/supabseconfig'
const inter = Inter({ subsets: ['latin'] })
import { useStore } from '@/lib/useStore'
import { useEffect } from 'react'
import Header from "@/components/Header";
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
import Router from 'next/router'
export default function RootLayout({ children }) 
{
  const {user,setUser,session,setSession,globalLoading,setGlobalLoading,initializeHackathons}=useStore();
  useEffect(()=>
  {
       try {
          (async function()
          {
            const value1 = await supabase.auth.getUser()
            setUser(value1.data.user)
            const value2 = await supabase.auth.getSession();
            // console.log(value1.data.user)
            setSession(value2.data.session)
            const { data, error } = await supabase
                    .from('Hackathons')
                    .select()
                    .order('created_at', { ascending: false })
            if(data)
            {
              initializeHackathons(data)
            }
            setGlobalLoading(false)
          }())  
        } catch (error) {
           setGlobalLoading(false)
           console.log(error.message)
       }
       Router.events.on('routeChangeStart', () => setGlobalLoading(true));
       Router.events.on('routeChangeComplete', () => setGlobalLoading(false));
       Router.events.on('routeChangeError', () => setGlobalLoading(false));   
  },[])
  return (
    <html lang="en">
      <head>
        <title>HackFinder</title>
        <link rel="icon" href='/favicon.png'></link>
      </head>
      <body className={inter.className +" bg-gradient-to-r from-[#050b13] via-[#080421] to-[#000000] text-white"}>
      {
          globalLoading?(
          <main className="box-content flex flex-col items-center justify-center min-h-screen gap-3">
             <Loader />
             <span>Setting Up Dashboard</span>
          </main>):(
            <>
              {children} 
              <Footer />
            </>
          )
      }
      </body>
    </html>
  )
}
