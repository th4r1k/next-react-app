function GoBack() {
  return (
    <>
      <div className="absolute top-20 left-10">
        <button
          className=" rounded-full px-2 py-2"
          onClick={() => window.history.back()}
        >
          <svg
            className="h-6 w-6 fill-gray-800 dark:fill-gray-500 "
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="122.88px"
            height="82.03px"
            viewBox="0 0 122.88 82.03"
            enableBackground="new 0 0 122.88 82.03"
          >
            <g>
              <path d="M28.205,14.087h59.548c9.635,0,18.405,3.818,24.775,9.97c6.387,6.169,10.352,14.667,10.352,24.001 c0,9.334-3.965,17.831-10.352,24c-6.37,6.152-15.141,9.972-24.775,9.972H21.496V61.069h66.257c3.744,0,7.135-1.467,9.581-3.83 c2.43-2.347,3.938-5.596,3.938-9.181c0-3.586-1.508-6.835-3.938-9.181c-2.446-2.363-5.837-3.831-9.581-3.831H28.205V49.71L0,25.384 L28.205,0V14.087L28.205,14.087z" />
            </g>
          </svg>
        </button>
      </div>
    </>
  )
}
export default GoBack
