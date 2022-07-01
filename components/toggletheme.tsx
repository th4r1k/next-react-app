import { useTheme } from 'next-themes'

function Toggletheme() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="absolute top-10 left-10">
      <button
        className=" rounded-full px-2 py-2"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <svg
          className="h-6 w-6 text-gray-800 active:text-gray-400 dark:hidden dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          className="hidden h-6 w-6 text-gray-500 active:text-gray-500 dark:flex dark:text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  )
}
export default Toggletheme
