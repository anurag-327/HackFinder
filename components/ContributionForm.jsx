"use client"
import { useRouter } from "next/navigation";
import { X,WarningOctagon } from "phosphor-react";
import { useState,useEffect, useRef } from "react";
import {useForm} from "react-hook-form"
import { useStore } from "@/lib/useStore";
import Loader from "./Loader";
import { supabase } from "@/supabase/supabseconfig";
import { Toaster, toast } from "react-hot-toast";
const ContributionForm = () => {
  const router=useRouter();
  const {user,setHackathons}=useStore();
  const formRef=useRef();
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const [loading,setLoading]=useState(false);
  const [tags,setTags]=useState([])
  const [data,setData]=useState("")
  const [submissionError,setSubmissionError]=useState();
  
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var hr= date.getHours();
   var min= date.getMinutes();
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "-" + month + "-" + day+"T"+hr+":"+min;       
  async function handleData(value)
  {
    setLoading(true);
    try {
        const field={
            name:value.title,
            description:value.description,
            applyBefore:value.date,
            url:value.url,
            user_id:user.id,
            tags:tags,
            verified:false,
            addedBy:user.user_metadata.full_name
        }
        const { data, error } = await supabase
               .from('Hackathons')
               .insert(field)
               .select()
        if(data)
        { 
            setSubmissionError();
            setHackathons(data[0]);
            toast.success("Hackathon added😎");
            document.getElementById("form").reset();
            setTags([])
        }     
        if(error) throw(error)  
        setLoading(false);
    } catch (error) {
        setSubmissionError(error.message);
        console.log(error)
        setLoading(false);
    }
  }
  function addTags()
  {
    if(data)
    {
        if(!tags.includes(data))
        {
            setTags([...tags,data]);
        }
        setData("");
        
    }
  }
  function removetag(data)
  {
      setTags(tags.filter(item => item!=data))
  }
  return (
    <div className="px-1 py-4 flex flex-col justify-center items-center bg-white text-black mx-auto mt-2 z-40 md:w-[508px] max-w-[90%] gap-1 w-[390px] rounded-b-md">
        <Toaster reverseOrder position="top-right" />
        <h2 className="md:font-semibold md:text-2xl">Fill out form below</h2>
        <form id="form"  onSubmit={handleSubmit(handleData)} className="md:w-[80%] w-[95%]">
                <div className="mt-2">
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="title">Title{errors.title && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label>
                    <input id="title" {...register("title",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="text" ></input>     
                </div>
                <div className="mt-2">
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="url">Registration URL{errors.url && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label>
                    <input  id="url" {...register("url",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="url" ></input>     
                </div> 
                <div className="mt-2">
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="date">Apply Before{errors.date && <span className="ml-2 text-sm font-semibold text-red-500">Required*</span>}</label>
                    <input min={today} defaultValue={today}  id="date" {...register("date",{required:true})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="datetime-local" ></input>     
                </div> 
                <div className="mt-2">
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="description">Description</label>
                    <textarea rows={5} id="description" {...register("description",{required:false})} className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" type="email" ></textarea>     
                </div> 
                <div>
                    <label className="text-sm text-gray-600 dark:text-white" htmlFor="tags">Tags</label>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <input value={data} onChange={(e) => setData(e.target.value)} type="text" id="tags" className="w-full p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400" placeholder=""/>
                        <button type="button" onClick={addTags} className="p-2 border-2 rounded-md outline-none resize-none focus:border-2 focus:rounded-md focus:border-purple-400">Add</button>
                    </div>
                </div>
                <ul className="flex flex-wrap gap-1 mt-2">
                {
                    tags.map(data => <li key={data} className="flex items-center justify-center p-1 bg-gray-200 border-2 rounded-md">{data}<button className="ml-3 " type="button" onClick={()=>removetag(data)}><X className="" size={20} fill="#000000" weight="bold"/></button></li>)
                }</ul>
                <div className="flex flex-col justify-center gap-3 mt-1 ">
                {
                    submissionError&&<div className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold text-center text-red-800 dark:text-white">
                    <WarningOctagon size={20} color="#7da239" weight="bold" />
                    {submissionError}</div>
                } 
                {
                    !loading?(
                        <button type="submit" disabled={loading} className={`w-full font-semibold  text-white bg-blue-600 p-2 rounded-md`} >Submit</button>
                    ):<div className="mx-auto text-black dark:text-white"><Loader/></div>
                } 
               
              </div>
            </form>

    </div>
  )
}

export default ContributionForm