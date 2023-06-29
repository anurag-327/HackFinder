import Image from 'next/image'
import { useState } from 'react';
import Countdown from 'react-countdown';
import {useForm} from "react-hook-form"
import { supabase } from "@/supabase/supabseconfig";
import Loader from '../Loader';
import { adminStore } from '@/lib/adminStore';
import { toast } from 'react-hot-toast';
const AdminHackathonCard = ({data}) => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const {deleteverifiedHackathon,deleteUnverifiedHackathons,setVerifiedHackathons}=adminStore();
  const [loading,setLoading]=useState(false);
  const [tags,setTags]=useState([])
  const [submissionError,setSubmissionError]=useState();
  const [edit,setEdit]=useState(false)
  async function deleteHackathon()
  {
    try {
      const { error } = await supabase
       .from('Hackathons')
       .delete()
       .eq('id', data.id)
       if(!error)
       {
          deleteUnverifiedHackathons(data.id); 
          toast.success("Deleted successfully!") 
       }
       else
       {
          throw(error);
       }
    } catch (error) {
      setSubmissionError(error.message)
       toast.error("Error deleting")
    }
    
  }
  async function handleData(value)
  {
    try {
      const x = await supabase
       .from("Hackathons")
       .update({
        name:value.title,
        description:value.description,
        url:value.url,
        applyBefore:value.data,
        verified:true
       })
       .eq('id', data.id)
       .select()
       if(x.data.length>0)
       {
         deleteUnverifiedHackathons(data.id)
         setVerifiedHackathons(x.data[0])
         toast.success("Verified successfullly!")
       }    
       else
       {
          throw(x.error);
       }    
    } catch (error) {
       toast.error("verification failed")
    }
    
  }
  const Completionist = () => <span className='font-bold text-center text-red-700'>Expired!</span>;
  return (
    <div className='flex flex-col border-2 rounded-md border-gray-300 md:flex-row gap-2 md:gap-5 w-[95%]'>
      <div className='md:w-[30%]'>
        <img className='w-full bg-cover aspect-square' src="/ImageError.webp"  alt="image" />
      </div>
      <div className='flex md:w-[70%] p-4 md:p-2 flex-col gap-1'>
      <form id="form"  onSubmit={handleSubmit(handleData)} className="w-full">
                <div className="mt-1">
                    {/* <label className="text-sm text-gray-600 dark:text-white" htmlFor="title">Title{errors.title && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label> */}
                    <input defaultValue={data.name} readOnly={!edit} id="title" {...register("title",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="text" ></input>     
                </div>
                <div className="mt-1">
                    {/* <label className="text-sm text-gray-600 dark:text-white" htmlFor="url">Registration URL{errors.url && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label> */}
                    <input defaultValue={data.url} readOnly={!edit} id="url" {...register("url",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="url" ></input>     
                </div> 
                <div className="mt-1">
                    {/* <label className="text-sm text-gray-600 dark:text-white" htmlFor="date">Apply Before{errors.date && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label> */}
                    <input defaultValue={data.applyBefore} readOnly={!edit} id="date" {...register("date",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="datetime-local" ></input>     
                </div> 
                <div className="mt-1">
                    {/* <label className="text-sm text-gray-600 dark:text-white" htmlFor="description">Description</label> */}
                    <textarea defaultValue={data.description} readOnly={!edit} rows={5} id="description" {...register("description",{required:false})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="email" ></textarea>     
                </div> 
               
                
                <div className="flex flex-col justify-center gap-3 mt-1 ">
                {
                    submissionError&&<div className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold text-center text-red-800 dark:text-white">
                    <WarningOctagon size={20} color="#7da239" weight="bold" />
                    {submissionError}</div>
                } 
                {
                    !loading?(<div className='flex flex-col gap-6 md:flex-row'>
                        <button onClick={deleteHackathon} type="button" disabled={loading} className={`w-full font-semibold  text-white bg-red-600 p-2 rounded-md`} >Discard</button>
                        {!edit&&
                        <button onClick={() => setEdit(!edit)} type="button" disabled={loading} className={`w-full font-semibold  text-white bg-blue-600 p-2 rounded-md`} >Edit</button>}
                        <button type="submit" disabled={loading} className={`w-full font-semibold  text-white bg-blue-600 p-2 rounded-md`} >Verify</button></div>
                    ):<div className="mx-auto text-black dark:text-white"><Loader/></div>
                } 
               
              </div>
            </form>
      </div>
    </div>
  )
}

export default AdminHackathonCard