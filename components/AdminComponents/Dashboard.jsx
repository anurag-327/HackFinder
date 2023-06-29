import { useStore } from '@/lib/useStore'
import { Check } from 'phosphor-react';
import HackathonCard from '../miniComponents/HackathonCard';
import { adminStore } from '@/lib/adminStore';
const Dashboard = () => {
  const {verifiedHackathons,unverifiedHackathons}=adminStore();
  const {hackathons}=useStore();
  return (
    <div>


      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <div className='rounded-sm px-8 border border-stroke bg-white py-6 px-7.5 shadow-default '>
               <div className='flex flex-col h-11.5 w-11.5 items-start justify-center  bg-meta-2 dark:bg-meta-4'>
                  <Check className='p-2 bg-gray-200 rounded-full' size={40} weight="bold" color="#423fde" />
                  <div className='flex items-end justify-between mt-4'>
                    <div>
                      <h1 className='text-4xl font-bold text-black'>{verifiedHackathons.length}</h1>
                      <span className='text-sm font-medium'>Verified Hackathons</span>
                    </div>
                    <span className='flex items-center gap-1 text-sm font-medium text-meta-3'></span>
                  </div>
               </div>
         </div>       
        <div className='rounded-sm px-8 border border-stroke bg-white py-6 px-7.5 shadow-default '>
               <div className='flex flex-col h-11.5 w-11.5 items-start justify-center  bg-meta-2 dark:bg-meta-4'>
                  <Check className='p-2 bg-gray-200 rounded-full' size={40} weight="bold" color="#423fde" />
                  <div className='flex items-end justify-between mt-4'>
                    <div>
                      <h1 className='text-4xl font-bold text-black'>{unverifiedHackathons.length}</h1>
                      <span className='text-sm font-medium'>unverified Hackathons</span>
                    </div>
                    <span className='flex items-center gap-1 text-sm font-medium text-meta-3'></span>
                  </div>
               </div>
         </div>
        <div className='rounded-sm px-8 border border-stroke bg-white py-6 px-7.5 shadow-default '>
               <div className='flex flex-col h-11.5 w-11.5 items-start justify-center  bg-meta-2 dark:bg-meta-4'>
                  <Check className='p-2 bg-gray-200 rounded-full' size={40} weight="bold" color="#423fde" />
                  <div className='flex items-end justify-between mt-4'>
                    <div>
                      <h1 className='text-4xl font-bold text-black'>{hackathons.length}</h1>
                      <span className='text-sm font-medium'>Total Hackathons</span>
                    </div>
                    <span className='flex items-center gap-1 text-sm font-medium text-meta-3'></span>
                  </div>
               </div>
         </div>
      </div>


      <div className='mt-8'>
          <h2 className='text-3xl font-bold'>Registered Hackathons</h2>
          <div className='flex flex-wrap justify-center gap-3 mt-5 md:justify-start'>
                {
                  verifiedHackathons.map(data => <HackathonCard key={data.id} data={data}/>)
                }
                
          </div>
      </div>
    </div>
  )
}

export default Dashboard