"use client"
import Image from "next/image"
import { motion } from "framer-motion"
const Card = ({data}) => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="z-10 flex flex-col min-h-[300px]   mx-auto  justify-center items-center text-white rounded-md md:gap-5 bg-[#111010] border border-gray-600 px-4 py-8 md:flex-row w-[95%] md:w-[85%]">
        {
            data.id==1&&<Image className={`${data.reverse&&"md:order-2"} rounded-md`} src="/FindNextHackathon.png" width={400} height={400} alt={data.title} />
        }
        {
            data.id==2&&<Image className={`${data.reverse&&"md:order-2"} rounded-md`} src="/GrowSkills.jpg" width={400} height={400} alt={data.title} />
        }
        {
            data.id==3&&<Image className={`${data.reverse&&"md:order-2"} rounded-md`} src="/StayInformed.jpg" width={400} height={400} alt={data.title} />
        }
        {
            data.id==4&&<Image className={`${data.reverse&&"md:order-2"} rounded-md`} src="/JoinCommunity.jpg" width={400} height={400} alt={data.title} />
        }
        {
            data.id==5&&<Image className={`${data.reverse&&"md:order-2"} rounded-md`} src="/Contribute.jpg" width={400} height={400} alt={data.title} />
        }
        <div className={`${data.reverse&&"md:order-1"} p-2 flex flex-col`}>
            <h2 className="text-3xl font-bold text-center md:text-5xl">{data.title}</h2>
            <p className="mt-4 text-sm font-semibold text-justify text-white first-letter:text-3xl xl:px-10 ">{data.description}</p>
            {
                data.explorebtn&&
                    <a href="/hackathons" className="px-5 py-2 mx-auto font-bold text-white duration-300 transform bg-blue-700 rounded-full hover:bg-blue-500 mt-7">Explore Hackathons
                    <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> </a> 
            }
            {
                data.contributebtn&&
                    <a href="/contribute" className="px-5 py-2 mx-auto font-bold text-white duration-300 transform bg-pink-500 rounded-full hover:bg-blue-500 mt-7">Contribute
                    <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> </a> 
            }
            {
                data.authbtn&&(<div className="flex flex-col items-center justify-center w-full gap-2 mx-auto mt-3 md:flex-row">
                    <a className="px-16 py-2 text-white duration-100 transform bg-blue-600 border border-gray-200 rounded-full md:px-10 md:py-1 hover:bg-blue-400 " href={`/signup?callback_url=${window.location.href}`}>Sign up</a>
                    <a className="px-16 py-2 duration-100 transform border-2 border-pink-500 rounded-full md:px-10 md:py-1 hover:bg-green-600" href={`/signin?callback_url=${window.location.href}`}>Sign in</a>
                    </div>)
            }
        </div>
    </motion.div>
  )
}

export default Card