"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight,CaretRight } from "phosphor-react";
export default function Banner()
{
    
  return (
    <>
      <motion.div className="box-content z-10 flex flex-col items-center justify-center md:justify-start bg-no-repeat bg-cover bg-opacity-60  min-h-[90vh] bg-[url('/ban ner2.jpg')]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}> 
            <h1 className="text-5xl font-extrabold text-center text-white md:mt-16 md:text-6xl">Welcome to HackFinder!</h1>
            <p className="mt-2 text-lg font-semibold tracking-tighter text-center text-gray-300 md:text-2xl md:mt-1">Discover, Connect, Innovate: Unleash Your Hackathon Journey</p>
            <div className="p-1 mx-auto mt-5 z-10 md:w-[508px] max-w-[90%] gap-1 w-[390px] rounded-md">
                 <div className="flex items-center h-8 gap-2 p-2 mb-1 bg-gray-100 rounded-t-md">
                      <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                      <div className="w-4 h-4 rounded-full bg-purple-950"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                 </div>
                 <div className="flex flex-wrap items-center justify-center md:flex-row">
                     <img className="w-[50%] md:h-[160px] md:w-[250px]" src="/banner/hacktober.jpg"  alt="Banner"/>
                     <img className="w-[50%] md:h-[160px] md:w-[250px]" src="/banner/uber.jpg"  alt="Banner"/>
                     <img className="w-[50%] md:h-[160px] md:w-[250px]" src="/banner/flipkartgrid.png"  alt="Banner"/>
                     <img className="w-[50%] md:h-[160px] md:w-[250px]" src="/banner/myntra.png"  alt="Banner"/>  
                 </div>
            </div>
            <a href="/hackathons" className="px-5 py-2 mx-auto font-bold duration-300 transform bg-blue-700 rounded-full hover:bg-blue-500 mt-7">Explore Hackathons
                             <CaretRight className="inline ml-1" size={20} color="#ffffff" weight="bold" /></a>  

        {/* Background images  */}
        <Image className="absolute w-screen h-[90vh] -z-50 opacity-10" src="/banner3.jpg" width={1000} height={1000} alt="Background"/>
        <Image className="absolute bottom-0 w-screen opacity-50 h-[32rem] -z-30" src="/banner/bluewaves.png" width={1000} height={1000} alt="Background"/>
      </motion.div>
    </>
  );
};
