import { useStore } from '@/lib/useStore'
import HackathonCard from '../miniComponents/HackathonCard';
import AdminHackathonCard from '../miniComponents/AdminHackathonCard';
import { adminStore } from '@/lib/adminStore';
const Verify = () => {
  const {hackathons}=useStore();
  const {verifiedHackathons,unverifiedHackathons}=adminStore();
  return (
    <div>
       <div className='mt-8'>
          <h2 className='text-3xl font-bold'>Unverified Hackathons</h2>
          
          <div className='flex flex-wrap justify-center gap-3 mt-5'>
            {
              unverifiedHackathons.length>0?( 
                  unverifiedHackathons.map(data => <AdminHackathonCard key={data.id} data={data} />) 
              ):(
                <div className='mt-5'>
                    <h2 className='text-2xl font-bold'>Everything updated👍</h2>
                </div>
              )
            }   
          </div>
      </div>
    </div>
  )
}

export default Verify