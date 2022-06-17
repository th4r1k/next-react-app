import {signIn , signOut} from 'next-auth/react'

function Header(props: any){

    return(
        <>
         {props.session? (<div className='bg-gray-500 flex w-full justify-evenly shadow-sm relative'>
     <p>You are signed in {props.session?.user?.name}</p>
     <button onClick={()=>signOut()}>Logout</button>
     </div> )
       
      : (<div className='bg-gray-800 text-white dark:bg-gray-500 flex w-full justify-evenly shadow-sm'>
        <p>You are not signed in </p>
      <button onClick={()=>signIn()}>Login</button>
      <a href='/signup'>Create Account</a>
      
        </div> )}
        
        </>

    )
}

export default Header