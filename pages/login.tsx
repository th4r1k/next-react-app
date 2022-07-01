import { signIn, getSession } from 'next-auth/react'
import GoBack from '../components/Returnbutton'
import Toggletheme from '../components/Toggletheme'

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx)
  console.log(session)
  if (session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: {
      session,
    },
  }
}

function Login() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-400 dark:bg-gray-800 sm:py-12">
      <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
        <div className="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="px-5 py-7">
            <label className="block pb-1 text-sm font-semibold text-gray-600">
              E-mail
            </label>
            <input
              type="text"
              className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
            />
            <label className="block pb-1 text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
            />
            <button
              type="button"
              className="inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <span className="mr-2 inline-block">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <div className="p-5">
            <div className="flex justify-between gap-1">
              <button
                onClick={() => signIn('google')}
                type="button"
                className="inline-block w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md"
              >
                Login with Google{' '}
              </button>
              <button
                type="button"
                className="inline-block w-full rounded-lg border border-gray-200 py-2.5 text-center text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md"
              >
                Create Account
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="whitespace-nowrap text-center sm:text-left">
                <button className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block h-4 w-4 align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-1 inline-block">Forgot Password</span>
                </button>
              </div>
              <div className="whitespace-nowrap text-center  sm:text-right">
                <button className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block h-4 w-4 align-text-bottom	"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span className="ml-1 inline-block">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="whitespace-nowrap text-center sm:text-left">
              <button
                onClick={() => window.history.back()}
                className="mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="inline-block h-4 w-4 align-text-top"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="ml-1 inline-block">Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toggletheme />
      <GoBack />
    </div>
  )
}

export default Login
