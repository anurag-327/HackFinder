
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Card from "@/components/miniComponents/Card";
import banner2 from "@/public/banner2.jpg"
import card1 from "../public/FindNextHackathon1.png"
import card2 from "../public/GrowSkills.jpg"
import card3 from "../public/StayInformed.jpg"
import card4 from "../public/JoinCommunity.jpg"
import card5 from "../public/Contribute.jpg"
import FAQ from "../components/FAQ";
export default function Home()
{
   const FindnextHackathon={
      title:"Find Your Next Hackathon",
      description:`Looking for exciting hackathons to participate in?
      Look no further! HackFinder is here to help you
      discover and engage in the most thrilling hackathons
      happening around the globe.`,
      image:card1,
      reverse:false,
      explorebtn:true,
      authbtn:false,
      contributebtn:false
   }
   const GrowSkills={
      title:"Grow Your Skills",
      description:`Hackathons are the perfect platforms to learn and
      develop new skills. Enhance your coding prowess,
      gain hands-on experience, and boost your portfolio.
      Challenge yourself, and unlock your full potential.`,
      image:card2,
      reverse:true,
      explorebtn:false,
      authbtn:false,
      contributebtn:false
   }
   const StayInformed={
      title:"Stay Informed",
      description:`Never miss an opportunity! Stay up to date with the
      latest hackathons, workshops, and tech events through
      our comprehensive event calendar and personalized
      notifications. Be at the forefront of the innovation
      wave.`,
      image:card3,
      reverse:false,
      explorebtn:false,
      authbtn:false,
      contributebtn:false
   }
   const JoinCommunity={
      title:"Join the HackFinder Community",
      description:`Sign up now and become part of a dynamic community
      of passionate individuals who are eager to make a
      difference. Experience the thrill of hackathons
      like never before with HackFinder.`,
      image:card4,
      reverse:true,
      explorebtn:false,
      authbtn:true,
      contributebtn:false
   }
   const ContributeToCommunity={
      title:"Contribute to HackFinder Community",
      description:`At HackFinder, we believe in the power of community collaboration. As a user of our platform, you have the opportunity to contribute and help us expand our hackathon database. Found a new and exciting hackathon that isn't listed here? Share it with us and let others discover it too!`,
      image:card5,
      reverse:false,
      explorebtn:false,
      authbtn:false,
      contributebtn:true
   }
   
  
  return (
    <main > 
      <Header/> 
        <Banner />
        <div className="flex flex-col gap-6 md:gap-14">
            <Card data={FindnextHackathon} />           
            <Card data={GrowSkills} />             
            <Card data={StayInformed} />             
            <Card data={JoinCommunity} />             
            <Card data={ContributeToCommunity} />             
        </div> 
        <FAQ />
    </main>
  )
}
