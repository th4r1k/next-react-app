import { signIn, signOut } from 'next-auth/react'

function Header(props: any) {
  return (
    <>
      {props.session ? (
        <div className="relative flex w-full justify-evenly bg-gray-500 shadow-sm">
          <p>You are signed in {props.session?.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div className="flex w-full justify-evenly bg-gray-800 text-white shadow-sm dark:bg-gray-500">
          <p>You are not signed in </p>
          <button onClick={() => signIn()}>Login</button>
          <a href="/signup">Create Account</a>
        </div>
      )}
    </>
  )
}

export default Header
