import { getSession } from 'next-auth/react'
import GoBack from '../components/Returnbutton'
import Toggletheme from '../components/Toggletheme'

export async function getServerSideProps() {
  const session = await getSession()

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

function Signup() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-400 dark:bg-gray-800 sm:py-12">
      <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
        <div className="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="px-5 py-7">
            <label className="block pb-1 text-sm font-semibold text-gray-600">
              Name
            </label>
            <input
              type="text"
              className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm"
            />
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
          </div>
          <div className="p-5">
            <div className="flex justify-between gap-1">
              <button
                type="button"
                className="inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span className="mr-2 inline-block">Create Account</span>
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

export default Signup
