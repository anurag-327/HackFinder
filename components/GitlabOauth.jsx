import { supabase } from "@/supabase/supabseconfig"
export default function GitlabOauth()
{
    async function handleGitlabOauth()
    {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'gitlab',
                options:{
                    redirectTo:"http://localhost:3000/"
                }
              })  
        } catch (error) {
            console.log(error) 
        }
           
    }
    return (
    <button onClick={handleGitlabOauth} className="flex items-center gap-2 p-1 text-black bg-white border border-gray-300 rounded-md"> 
       <img src="./gitlab.jpg" alt="google" width={40} height={40} className="ml-4"/>
        <span>Continue with Gitlab</span>
    </button>
    )
}