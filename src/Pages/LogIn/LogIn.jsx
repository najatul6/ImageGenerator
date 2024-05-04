import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <div className="bg-dark-blue min-h-screen mx-auto flex justify-center items-center">
      <div className="md:w-3/5 flex justify-center items-center bg-low-blue mx-auto py-10 px-5 rounded-xl shadow-lg shadow-slate-400">
        <div className="w-full">
          <h2 className="flex flex-col gap-2 justify-center items-center text-2xl font-bold py-3 uppercase text-white">
            Log In
            <p className="text-xs font-normal">Sign in to access your account</p>
          </h2>
          <form className="transition-all duration-300">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-dark-orange hover:bg-dark-blue hover:text-light-sky focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <hr className="my-1 border-white sm:mx-auto dark:border-white lg:my-8" />
          <div className="flex flex-col justify-center items-center">
            <button className="flex justify-center items-center gap-2 text-white font-bold py-3 px-10 mb-3 hover:bg-dark-orange border">
              <span>
                <FcGoogle />
              </span>
              Continue with Google
            </button>
            <p className="text-white">
              Don&rsquo;t have an account yet?{" "}
              <Link to="/signUp" className="text-dark-orange font-bold hover:text-light-sky hover:underline">
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
