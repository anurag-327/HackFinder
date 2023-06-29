"use client"
import {useForm} from "react-hook-form"
import { supabase } from "@/supabase/supabseconfig";
import { useState } from 'react';
import { Eye,Thermometer,Warning } from "phosphor-react";
import Loader from "../Loader";
import { useStore } from "@/lib/useStore";
import { Toaster, toast } from "react-hot-toast";
const AddAdmin = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [submissionError,setSubmissionError]=useState();
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState();
  const {user}=useStore();
 
  async function handleSignin(value)
    {
        setError()
        setLoading(true)
        try {
          const { data, error } = await supabase
          .from('admins')
          .insert({created_by:user.id,user_id:value.uid})
          .select()
          if(error) throw(error)
          else{
            document.getElementById("adminform").reset();
            toast.success("Admin added successfully!")
          }
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(error.message)
          
        }        
    }
  return (
    <div className="flex items-center h-[80vh] justify-center w-full ">
      
       <form id="adminform" className="max-w-[360px] w-[90%] bg-white mt-20 py-4 mx-auto border border-gray-300 p-2 rounded-lg" onSubmit={handleSubmit(handleSignin)}>
        <h2 className="font-semibold text-center text-gray-500 ">Enter Userid to add as Admin</h2>
                <div className="mt-2">
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="uid">User id {errors.uid && <span className="text-sm font-semibold text-red-500">Required*</span>}</label>
                    <input id="uid" {...register("uid",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="text" ></input>    
                </div>
                {
                    error&&<div className="flex items-center justify-center gap-2 mt-4 text-sm text-center text-red-800 dark:text-white">
                    <Warning className="w-[10%]" size={20} color="#7da239" weight="bold" />
                    <span className="w-[90%]">{error}</span>
                    </div>
                }
                <div className="flex justify-center mt-5 ">
                {
                    !loading?(
                        <button type="submit" disabled={loading} className={`w-full font-semibold  text-white bg-blue-600 p-2 rounded-md`} >Add Admin</button>
                    ):<div className="flex items-center gap-1 px-4 py-1 text-white bg-red-600 rounded-md dark:text-white"><Loader/>Adding...</div>
                }  
              </div>
            </form>


    </div>
  )
}

export default AddAdmin