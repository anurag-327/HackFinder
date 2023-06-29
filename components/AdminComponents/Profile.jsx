

import { useStore } from "@/lib/useStore";



const Profile = () => {
  const {user}=useStore();
  console.log(user)
  return (
    <>
      {/* <Breadcrumb pageName="Profile" /> */}

      <div className="px-1 py-4 overflow-hidden min-h-[85vh] bg-white border rounded-sm border-stroke shadow-default ">
        <div className="relative h-35 md:h-65">
          <img
            src="/cover-01.png"
            alt="profile cover"
            className="object-cover object-center w-full h-full rounded-tl-sm rounded-tr-sm"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 mt-10 md:gap-5 md:flex-row">
          <div className="md:w-[20%] w-[30%]">
          <img
            src={user.user_metadata.avatar_url}
            alt="profile cover"
            className="object-cover object-center w-full h-full rounded-full"
          />
          </div>
          <div className="sm:mt-5 md:mt-0">
            <div className="text-center">
                <h2 className="text-xl font-semibold">{user.user_metadata.full_name}</h2>
                <span className="text-sm text-gray-600">Admin</span>
            </div>
            <div className='grid grid-cols-1 sm:mt-8 md:mt-4 gap-4 sm:grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5'>
              <div className="flex flex-col gap-1 px-1 py-4 text-center whitespace-pre-wrap bg-gray-200 border border-gray-500 rounded-md">
                   <span className="p-1 break-words">{user.user_metadata.email}</span>
                   <span>Email</span>
              </div>
              <div className="flex flex-col gap-2 px-1 py-4 text-center bg-gray-200 border border-gray-500 rounded-md">
                   <span>Admin</span>
                   <span>Role</span>
              </div>
              <div className="flex flex-col gap-2 px-1 py-4 text-center bg-gray-200 border border-gray-500 rounded-md">
                   <span>{user.id}</span>
                   <span>User id</span>
              </div>
            </div>
          </div>
          
        </div>
        
         
        </div>
    </>
  );
};

export default Profile;
