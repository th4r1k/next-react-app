import type { NextPage } from 'next'
import Head from 'next/head'
import ToggleTheme from '../components/toggletheme'
import {useSession} from 'next-auth/react'
import Header from '../components/header'
import TextTyper from '../components/text'


const Home: NextPage = () => {
  const {data: session} = useSession()
  
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-400 dark:bg-gray-800">
      <Head>
        <title>TodoApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToggleTheme  />
      <Header session={session}/>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-gray-800 dark:text-slate-300 ">
        <h1 className="text-6xl font-bold">
          App`s using{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <TextTyper />
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full ">
          <a
            href="/todoapp"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 hover:border-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">ToDo &rarr;</h3>
            <p className="mt-4 text-xl">
              ToDo App 
            </p>
          </a>

          <a
            href="/login"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 hover:border-blue-600 focus:text-blue-600 "
          >
            <h3 className="text-2xl font-bold">Login &rarr;</h3>
            <p className="mt-4 text-xl">
              Google authentication
            </p>
          </a>

          <a
            href="/cep"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 hover:border-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Find CEP &rarr;</h3>
            <p className="mt-4 text-xl">
              Viacep API
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 hover:border-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        {/* <a
          className="flex items-center justify-center gap-2"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a> */}
      </footer>
    </div>
  )
}

export default Home
