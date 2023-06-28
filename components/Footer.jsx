import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope} from "phosphor-react";
const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-center w-full gap-5 p-5 mt-5 text-gray-300 dark:bg-gray-900">
        <div>
          <ul className="flex items-center justify-center gap-2">
            <li><a href="#"><InstagramLogo size={25} weight="fill" color="#ffffff" /></a></li>
            <li><a href="https://twitter.com/itsAnurag_sri"><TwitterLogo size={25}  weight="fill" color="#ffffff" /></a></li>
            <li><a href="#"><FacebookLogo size={25} weight="fill" color="#ffffff" /></a></li>
            <li><a href="https://www.linkedin.com/in/anuragsr327/"><LinkedinLogo size={25} weight="fill" color="#ffffff" /></a></li>
            <li><a href="mailto:anuragsrivastav0027@gmail.com"><Envelope size={25} weight="fill" color="#ffffff" /></a></li>
          </ul>
        </div>      
        <div className="text-center text-gray-300 ">
           <span> ©2023, HackFinder💙</span>
        </div>
    </footer>
  );
};

export default Footer;
