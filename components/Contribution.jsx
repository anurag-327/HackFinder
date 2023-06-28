"use client"
import ContributionSteps from "./ContributionSteps"
import ContributionForm from "./ContributionForm"
import { useStore } from "@/lib/useStore"
const Contribution = () => {
  const {user}=useStore();
  return (
    <div className="flex flex-col items-center w-full">
      <ContributionSteps />
      {
      user?
      <ContributionForm />:<a className="p-2 mx-auto mt-10 bg-blue-700 rounded-full hover:bg-blue-500" href={`/signin?callback_url=${window.location.href}`}>Signin to Contribute
       <svg className="inline ml-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>      
       </a>
      }
    </div>
  )
}

export default Contribution