import { supabase } from "./supabseconfig"
export async function SignUp(email,password,name)
{
    return await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                name
            }
        }
      })
}

export async function SignIn(email,password)
{
    return await supabase.auth.signInWithPassword({
        email,
        password,
      })
}


export async function GithubOauth()
{
   return await supabase.auth.signInWithOAuth({
        provider: 'github'
      })
}


export async function SignOut()
{
    return supabase.auth.signOut()
}


export async function getUser()
{
    const { data: { user } } = await supabase.auth.getUser()
}


export async function verifyUser()
{
    
const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})

}
export async function ResetPassword()
{
    
// /**
//  * Step 1: Send the user an email to get a password reset token.
//  * This email contains a link which sends the user back to your application.
//  */
// const { data, error } = await supabase.auth
// .resetPasswordForEmail('user@email.com')

// /**
// * Step 2: Once the user is redirected back to your application,
// * ask the user to reset their password.
// */
// useEffect(() => {
//  supabase.auth.onAuthStateChange(async (event, session) => {
//    if (event == "PASSWORD_RECOVERY") {
//      const newPassword = prompt("What would you like your new password to be?");
//      const { data, error } = await supabase.auth
//        .updateUser({ password: newPassword })

//      if (data) alert("Password updated successfully!")
//      if (error) alert("There was an error updating your password.")
//    }
//  })
// }, [])

}