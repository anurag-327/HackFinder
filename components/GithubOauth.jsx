import { supabase } from "@/supabase/supabseconfig";
export default function GithubOauth({callback_url})
{
    if(!callback_url)
       callback_url=window.location.href
    async function handleGithubOauth()
    {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options:{
                    redirectTo:callback_url
                }
              })
              console.log(data,error)
        } catch (error) {
           console.log("error in oauth")  
        }
        
    }
    return (
        <button onClick={handleGithubOauth} className="flex items-center gap-2 p-1 text-white bg-black border border-gray-300 rounded-md"> 
            <img src="./github.png" alt="google" width={40} height={40} className="ml-4"/>
            <span>Continue with Github</span>
        </button> 
    )
}