import faqQuestions from "@/data/faqQuestions"
import FAQCard from "./miniComponents/FAQCard"
const FAQ = () => {
  return (
    <div className=' w-[95%] mt-10 md:w-[60%] mx-auto sm:w-full  p-4 sm:p-3 rounded-md '>
      <h2 className='text-3xl font-bold text-center text-yellow-300 font-poppins'>Frequently Asked Questions</h2>
      <hr className='mt-1'></hr>
      <div className='flex flex-col gap-2 mt-5'>
      {
        faqQuestions.map(item => <FAQCard key={item.id} item={item} />)
      }
      </div>
    </div>
  )
}

export default FAQ