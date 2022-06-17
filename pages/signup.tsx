import { getSession } from "next-auth/react";
import GoBack from "../components/returnbutton";
import Toggletheme from "../components/toggletheme";


export async function getServerSideProps(){
    const session = await getSession();
   
    if (session) {
      return{
        redirect:{
          destination: "/"
        }
      }
    }
    return {props: {
      session,
    }}
  }

  function Signup(){
    
  return(
  
  <div className="min-h-screen bg-gray-400 dark:bg-gray-800 flex flex-col justify-center sm:py-12">
    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div className="px-5 py-7">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
          <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
          <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
          <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
          <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
          <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
          
        </div>
        <div className="p-5">
            <div className="flex gap-1 justify-between">
            <button type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span className="inline-block mr-2">Create Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </button>
            </div>
        </div>
         
      </div>
      <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button onClick={() => window.history.back()} className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="inline-block ml-1">Back</span>
              </button>
            </div>
          </div>
        </div>
    </div>
    <Toggletheme/>
    <GoBack/>
  </div>
  )
  }
  
  export default Signup