import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <main className="pt-24 bg-gray-900 h-screen">
       <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center text-left">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight font-sans">
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-linear-to-r from-white to-gray-500 lg:inline">
                  Manage your expenses easily with your financial planning application
                </span>
            </h1>
            <p className="px-0 mb-8 text-lg text-white md:text-xl lg:px-24">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link to="/login" className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-slate-800 font-semibold bg-cyan-100 rounded-xs sm:w-auto sm:mb-0">
                  Log in
              </Link>
               <Link to="/register" className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-slate-800 font-semibold bg-gray-100 rounded-xs sm:w-auto sm:mb-0">
                  Sign up
              </Link>
            </div>
          </div>
       </div>
    </main>
  )
}

export default LandingPage